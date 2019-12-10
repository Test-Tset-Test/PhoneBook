import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {count, finalize, tap} from 'rxjs/operators';
import {SpinnerComponent} from '../pages/client/spinner/spinner.component';
import {Injectable, Output} from '@angular/core';
import {SpinnerService} from './spinner.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private spinner: SpinnerService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.amount++;
    return next.handle(req)
      .pipe (finalize(() => {
          this.spinner.amount--;
        })
      );
  }
}
