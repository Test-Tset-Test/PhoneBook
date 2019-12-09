import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseApiService {
  private baseUrl: string;
  constructor(public http: HttpClient) {
    this.baseUrl = 'http://localhost:80';
  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get<T>(url: string = '', headers?): Observable<HttpEvent<T>> {
    return this.http.get<T>(this.getUrl(url), headers);
  }

  public request<T>(url: string = '', headers?): Observable<HttpEvent<T>> {
    return this.http.request<T>('get', this.getUrl(url), headers);
  }

  public post<T>(url: string = '', data?): Observable<T> {
    return this.http.post<T>(this.getUrl(url), data);
  }

  public delete<T>(url: string = '', data?): Observable<HttpEvent<T>> {
    return this.http.delete<T>(this.getUrl(url), data);
  }

  public put<T>(url: string, data?): Observable<T> {
    return this.http.put<T>(this.getUrl(url), data);
  }
}
