import {Component, OnDestroy, OnInit,  ViewChild} from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {UserService} from '../../../service/user.service';
import {AddUserResponse, DeleteUserRequest, UserListRequest, UserListResponse} from '../../../api/Model/user.model';
import {take} from 'rxjs/operators';
import {EditUserComponent} from './editUser/editUser.component';

@Component({
  selector: 'app-employees',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  private timeId;
  @ViewChild(EditUserComponent, null) editUserComponent: EditUserComponent;
  userList: UserListResponse[];

  constructor(private service: UserService) {
  }

  getUserList() {
    this.service.getUserList()
      .pipe(take(1))
      .subscribe((response: any) => {
        this.userList = response;
      });
  }

  deleteSelectedUser(id: DeleteUserRequest) {
    this.service.deleteUser(id)
      .pipe(take(1))
      .subscribe(() => {
        this.getUserList();
      });
  }

  ngOnInit() {
    this.getUserList();
  }

  ngOnDestroy(): void {
  }

  searchUser(filterData: string) {
    if (this.timeId) {
      clearTimeout(this.timeId);
    }
    this.timeId = setTimeout(() => {
      if (filterData) {
        this.service.filterUserByName(filterData).subscribe((response: any) => {
          this.userList = response;
        });
      } else {
        console.log('UP');
        this.getUserList();
      }
    }, 1000);
  }
}
