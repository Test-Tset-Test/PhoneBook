import {Injectable} from '@angular/core';
import {BaseApiService} from './base.api.service';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import {HttpEvent} from '@angular/common/http';
import {
  AddUserRequest,
  AddUserResponse, DeleteUserRequest,
  DeleteUserResponse, FilterUserResponse,
  GetUserByIdResponse, UpdateUserRequest, UpdateUserResponse,
  UserListResponse
} from './Model/user.model';

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
    return this.service.post<AddUserResponse>('/api/addUser', data);
  }

  deleteUser = (id: DeleteUserRequest): Observable<HttpEvent<DeleteUserResponse>> => {
    return this.service.delete<DeleteUserResponse>('/api/userDelete' + '/' + id);
  }

  getUserById = (id: string): Observable<HttpEvent<GetUserByIdResponse>> => {
    return this.service.get<GetUserByIdResponse>('/api/userById' + '/' + id);
  }

  updateUser = (data: UpdateUserRequest): Observable<UpdateUserResponse> => {
    return this.service.put<UpdateUserResponse>('/api/updateUser', data);
  }

  filterUserByName = (dataForFilter: string): Observable<HttpEvent<FilterUserResponse>> => {
    return this.service.get<FilterUserResponse>('/api/filterUser' + '/' + dataForFilter);
  }
}
