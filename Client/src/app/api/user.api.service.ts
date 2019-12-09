import {Injectable} from '@angular/core';
import {BaseApiService} from './base.api.service';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import {HttpEvent} from '@angular/common/http';
import {AddUserRequest, AddUserResponse} from './Model/user.model';

@Injectable()
export class UserApiService {
  constructor(private service: BaseApiService) {}
  // register(user: UserModel) {
  //   return this.service.post(`auth/register`, user);
  // }

  getUserListApi = (): Observable<HttpEvent<AddUserResponse>> => {
    return this.service.get<AddUserResponse>('/api/userList');
  }

  addNewUserInPhoneBook = (data: AddUserRequest): Observable<AddUserResponse> => {
    console.log(JSON.stringify(data));
    return this.service.post<AddUserResponse>('/api/addUser', data);
  }

  deleteUser = (id: UserModel): Observable<HttpEvent<AddUserResponse>> => {
    return this.service.delete<AddUserResponse>('/api/userDelete' + '/' + id);
  }

  getUserById = (id: string): Observable<HttpEvent<AddUserResponse>> => {
    return this.service.get<AddUserResponse>('/api/userById' + '/' + id);
  }

  updateUser = (data: AddUserRequest): Observable<AddUserResponse> => {
    return this.service.put<AddUserResponse>('/api/updateUser', data);
  }

  filterUserByName = (dataForFilter: string): Observable<HttpEvent<AddUserResponse>> => {
    return this.service.get<AddUserResponse>('/api/filterUser' + '/' + dataForFilter);
  }
}
