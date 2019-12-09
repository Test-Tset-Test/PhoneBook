  import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserPageComponent} from './userPage.component';
  import {Registration2Module} from '../../registrationOnReactioveForm/registration2.module';

@NgModule({
  declarations: [
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Registration2Module
  ],
  exports: [
    UserPageComponent,
  ],
  providers: [],
  bootstrap: [UserPageComponent]
})
export class UserPageModule { }
