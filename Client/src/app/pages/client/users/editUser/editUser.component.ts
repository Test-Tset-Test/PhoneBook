import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from '../../../../service/modal.service';
import {UserService} from '../../../../service/user.service';
import {
  AddUserRequest,
  GetUserByIdResponse,
  UpdateUserRequest,
  UpdateUserResponse, UserInfo
} from '../../../../api/Model/user.model';
import {take} from 'rxjs/operators';
import {UserModel} from '../../../../models/user.model';

@Component({
  selector: 'app-employees-editing',
  templateUrl: 'editUser.component.html',
  styleUrls: ['editUser.component.scss']
})
export class EditUserComponent implements OnInit {
  @Output()
  userChange = new EventEmitter();
  private userInfo?: UserInfo;


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
      this.userInfo = response;
      this.modalService.open(idModal);
    });
  }

  editUserSub(idForCloseModal: string, editUser: UpdateUserRequest) {
    this.userService.updateUser(editUser).pipe(take(1)).subscribe(() => {
      this.userChange.emit();
      this.closeModal(idForCloseModal);
    });
  }

  closeModal(idModal) {
    this.modalService.close(idModal);
  }
}
