import {NgModule} from '@angular/core';

import {NavMenuComponent} from './nav-menu.component';
import {RouterModule} from '@angular/router';
import {ModalModule} from '../../components/modal/modal.module';
import {RegistrationModule} from '../client/registration/registration.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    RegistrationModule,
  ],
  exports: [NavMenuComponent],
  providers: [],
})
export class NavMenuModule {
}
