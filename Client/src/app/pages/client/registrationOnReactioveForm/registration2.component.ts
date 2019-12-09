import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalModule} from '../../../components/modal/modal.module';
import {UserService} from '../../../service/user.service';
import {ModalService} from '../../../service/modal.service';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {getLiteralValue} from 'codelyzer/util/getLiteralValue';
import {UserModel} from '../../../models/user.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.scss']
})
export class Registration2Component implements OnInit {
  @Output()
  updateUserList = new EventEmitter();
  user: UserModel = new UserModel();
  maxBirthday: string;
  userForm: FormGroup;
  constructor(private modalService: ModalService,
              private fb: FormBuilder,
              private serviceApi: UserService) {
    this.getMaxBirthday();
  }

  ngOnInit() {
    this.initForm();
  }


  createNewUser(idForCloseModal: string, event: string) {
    this.serviceApi.addNewUserInPhoneBook(this.user).pipe(take(1)).subscribe(() => {
      // close Modal
      this.onSubmit(idForCloseModal);
      // UpdateUserList
      this.updateUserList.emit(event);
    });
  }

  getMaxBirthday() {
    const currentDate = new Date();
    const maxBirthday = new Date(currentDate.getFullYear() - 15, currentDate.getMonth(), currentDate.getDate());
    const year: string = String(maxBirthday.getFullYear());
    const month: string = maxBirthday.getMonth() + 1 < 10 ? `0${maxBirthday.getMonth() + 1}` : String(maxBirthday.getMonth() + 1);
    const day: string = maxBirthday.getDay() < 10 ? `0${maxBirthday.getDay()}` : String(maxBirthday.getDay());
    this.maxBirthday = `${year}-${month}-${day}`;
  }

  openModal(id) {
    this.initForm();
    this.modalService.open(id);
  }
  initForm() {
    this.userForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern(/[a-z]/),
        Validators.maxLength(30),
        ]
      ],
      lastName: ['', [
        Validators.required,
        Validators.pattern(/[a-z]/)
      ]
      ],
      phone: ['', [
        Validators.required,
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      age: ['', [
        Validators.required,
        ]
      ],
      password: [null, [
        Validators.required,
        Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}/),
      ]
      ],
      passwordRepeat: [null, [
        Validators.required,
        passwordRepeat => {
          if (this.userForm !== undefined) {
            return this.passwordValidator(this.userForm.controls.password.value, passwordRepeat.value);
          }
        }
      ]],
    });
  }

  getControlErrors(controlName: string): string[] {
    const control = this.userForm.controls[controlName];
    if (control === undefined || control.errors === null) {
      return [];
    }

    const errors: string[] = Object.keys(control.errors);
    return errors;
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  passwordValidator(password: string, passwordRepeat: string): ValidationErrors {
      if (password !== passwordRepeat) {
        return { passwordValidator: true };
      }
      return null;
  }

  onSubmit(id: string) {
    console.log("fasdwa");
    const controls = this.userForm.controls;

    if (this.userForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    console.log(JSON.stringify(this.userForm.value));
    this.closeModal(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
