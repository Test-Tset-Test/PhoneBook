import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from '../../../../service/modal.service';
import {UserService} from '../../../../service/user.service';
import {AddUserRequest, AddUserResponse} from '../../../../api/Model/user.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-employees-editing',
  templateUrl: 'editUser.component.html',
  styleUrls: ['editUser.component.scss']
})
export class EditUserComponent implements OnInit {
  @Output()
  updateUserList = new EventEmitter();
  private userListForEdit: AddUserRequest;


  constructor(private modalService: ModalService,
              private userService: UserService) {
  }

  ngOnInit() {

  }

  openModal(idModal: string, idForEditUser: string) {
    this.userService.getUserById(idForEditUser)
      .pipe(
        take(1)
      )
      .subscribe((response: any) => {
      this.userListForEdit = response;
      this.modalService.open(idModal);
    });
  }

  editUserSub(editUser: AddUserRequest, event: any) {
    this.userService.updateUser(editUser).pipe(take(1)).subscribe(() => {
        this.updateUserList.emit(event);
      }
    );
    this.closeModal('pec-modalEdit');
  }

  closeModal(idModal) {
    this.modalService.close(idModal);
  }
}
