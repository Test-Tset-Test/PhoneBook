import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalService} from '../../../service/modal.service';
import {NgForm, NgModel} from '@angular/forms';
import {UserModel} from '../../../models/user.model';
import {take} from 'rxjs/operators';
import {UserService} from '../../../service/user.service';
import {AddUserRequest} from "../../../api/Model/user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Output()
  userChange = new EventEmitter();

  maxBirthday: string;
  user: UserModel = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    age: '',
    password: '',
    passwordRepeat: '',
};
  readonly passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}/;

  constructor(private modalService: ModalService,
              private serviceApi: UserService) {
    this.getMaxBirthday();

  }

  ngOnInit() {
  }

  createNewUser(form: NgForm, idForClosedModal: string) {
    this.onSubmit(form, idForClosedModal);
    const payLoad: AddUserRequest = {
      first_name: this.user.firstName,
      last_name: this.user.lastName,
      phone: this.user.phone,
      email: this.user.email,
      password: this.user.password,
      age: this.user.age,
    };
    this.serviceApi.addNewUserInPhoneBook(payLoad).pipe(take(1)).subscribe(() => {
      // UpdateUserList
      this.userChange.emit();
      this.onSubmit(form, idForClosedModal);
      this.closeModal(idForClosedModal);
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

  getIsValidPasswordRepeat(password, passwordRepeat) {
    return password === passwordRepeat;
  }

  openModal(id) {
    this.modalService.open(id);
  }

  getControlErrors(control: NgModel): string[] {
    if (control === undefined || control.errors === null) {
      return [];
    }

    const errors: string[] = Object.keys(control.errors);
    return errors;
  }

  onSubmit(form: NgForm, idForClosedModal: string) {
    const controls = form.controls;


    if (form.valid && this.getIsValidPasswordRepeat(this.user.password, this.user.passwordRepeat)) {
      console.log(JSON.stringify(this.user));
    } else {
      console.log("error");
        Object.keys(controls)
          .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
