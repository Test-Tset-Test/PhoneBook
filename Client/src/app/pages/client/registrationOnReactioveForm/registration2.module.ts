import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavMenuModule} from '../../nav-menu/nav-menu.module';
import {UserModule} from '../users/user.module';
import {EditUserModule} from '../users/editUser/editUser.module';
import {UserPageModule} from '../users/userPage/userPage.module';
import {ModalModule} from '../../../components/modal/modal.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Registration2Component} from './registration2.component';
import {UserService} from '../../../service/user.service';

@NgModule({
  declarations: [
    Registration2Component,
  ],
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
  ],
  exports: [
    Registration2Component
  ],
  providers: [UserService],
})
export class Registration2Module {

}
