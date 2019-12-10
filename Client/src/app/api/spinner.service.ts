import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SpinnerService {
  amount = 0;
  isLoading = new Subject<boolean>();

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
