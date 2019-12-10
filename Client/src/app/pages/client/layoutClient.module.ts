import {NgModule} from '@angular/core';
import {LayoutClientComponent} from './layoutCLient.component';
import {NavMenuComponent} from '../nav-menu/nav-menu.component';
import {NavMenuModule} from '../nav-menu/nav-menu.module';
import {RouterModule, Routes} from '@angular/router';
import {UserModel} from '../../models/user.model';
import {UserModule} from './users/user.module';
import {EditUserModule} from './users/editUser/editUser.module';
import {UserPageModule} from './users/userPage/userPage.module';
import {ModalModule} from '../../components/modal/modal.module';
import {RegistrationModule} from './registration/registration.module';
import {ReactiveFormsModule} from '@angular/forms';
import {Registration2Module} from './registrationOnReactioveForm/registration2.module';
import {UserComponent} from './users/user.component';
import {UserPageComponent} from './users/userPage/userPage.component';

const clientRoute: Routes = [{
  path: '',
  component: LayoutClientComponent,
  children: [
    {path: 'userPhoneBook', component: UserComponent},
    {path: 'userPhoneBook/:id', component: UserPageComponent},
  ]
}];

@NgModule({
  declarations: [
    LayoutClientComponent,
  ],
  imports: [
    NavMenuModule,
    UserModule,
    EditUserModule,
    UserPageModule,
    RegistrationModule,
    Registration2Module,
    ReactiveFormsModule,
    RouterModule.forChild(clientRoute),
    ModalModule,
  ],
  exports: [
    LayoutClientComponent
  ],
  providers: [],
})
export class LayoutClientModule {

}
