import {ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {UserService} from '../../../service/user.service';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {AddUserRequest, AddUserResponse} from '../../../api/Model/user.model';
import {delay, take, takeUntil} from 'rxjs/operators';
import {ActivationEnd} from '@angular/router';
import {ModalService} from '../../../service/modal.service';
import {EditUserComponent} from './editUser/editUser.component';

@Component({
  selector: 'app-employees',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  private timeId;
  @ViewChild(EditUserComponent, null) editUserComponent: EditUserComponent;
  userList: Array<AddUserResponse>;

  constructor(private service: UserService) {
  }

  getUserList() {
    this.service.getUserList()
      .pipe(take(1))
      .subscribe((response: any) => {
        console.log(this.userList);
        this.userList = response;
      });
  }

  deleteSelectedUser(id: UserModel) {
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
    // this._subscribable.unsubscribe();
  }

  searchUser(filterData: string) {
    if (this.timeId) {
      clearTimeout(this.timeId);
    }
    this.timeId = setTimeout(() => {
      if (filterData) {
        this.service.filterUserByName(filterData).subscribe((response: any) => {
          console.log(response);
          console.log(this.userList);
          console.log('2');
          this.userList = response;
        });
      } else {
        console.log('UP');
        this.getUserList();
      }
    }, 1000);
  }
}
