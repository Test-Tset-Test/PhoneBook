import {NgModule} from '@angular/core';
import {SpinnerComponent} from './spinner.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ModalModule} from '../../../components/modal/modal.module';
import {SpinnerService} from '../../../api/spinner.service';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
  ],
  exports: [
    SpinnerComponent

  ],
  providers: [
    SpinnerService,
  ],
  bootstrap: [SpinnerComponent]
})
export class SpinnerModule {

}
