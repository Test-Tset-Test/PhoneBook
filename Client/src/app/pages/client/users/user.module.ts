import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './user.component';
import {EditUserModule} from './editUser/editUser.module';
import {ModalModule} from '../../../components/modal/modal.module';
import {Registration2Module} from '../registrationOnReactioveForm/registration2.module';
import {RegistrationModule} from '../registration/registration.module';
import {UserPageModule} from './userPage/userPage.module';



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    EditUserModule,
    Registration2Module,
    RegistrationModule,
    UserPageModule,
  ],
  exports: [
    UserComponent,
  ],
  providers: [

  ],
})
export class UserModule {
}
