import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {AddUserRequest} from '../../../../api/Model/user.model';
import {take} from 'rxjs/operators';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-page-employee',
  templateUrl: 'userPage.component.html',
  styleUrls: ['userPage.component.scss']
})
export class UserPageComponent implements OnInit {
  private userListForEdit: AddUserRequest;
  private id;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.getUserChoice(this.id);
  }

  getUserChoice(id: string) {
    console.log(id);
    this.userService.getUserById(id)
      .pipe(
        take(1)
      )
      .subscribe((response: any) => {
        console.log(response);
        this.userListForEdit = response;
      });
  }
}
