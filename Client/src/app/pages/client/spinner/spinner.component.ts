import {Component} from '@angular/core';
import {SpinnerService} from '../../../api/spinner.service';

@Component({
  selector: 'app-load',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent {
  constructor(public spinner: SpinnerService) {

  }

}
