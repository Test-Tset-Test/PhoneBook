import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EditUserComponent} from './editUser.component';
import {ModalModule} from '../../../../components/modal/modal.module';

@NgModule({
  declarations: [
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
  ],
  exports: [
    EditUserComponent,
  ],
  providers: [],
  bootstrap: [EditUserComponent]
})

export class EditUserModule { }
