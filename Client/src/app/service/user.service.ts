import {Injectable} from '@angular/core';
import {UserApiService} from '../api/user.api.service';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import {
  AddUserRequest,
  AddUserResponse, DeleteUserRequest,
  FilterUserResponse, GetUserByIdRequest, GetUserByIdResponse,
  UpdateUserRequest,
  UpdateUserResponse, UserInfo
} from '../api/Model/user.model';
import {HttpEvent} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private userApiService: UserApiService) {
  }

  getUserList = (): Observable<HttpEvent<AddUserResponse>> => {
    return this.userApiService.getUserListApi();
  }

  addNewUserInPhoneBook = (data: AddUserRequest): Observable<AddUserResponse> => {
    return this.userApiService.addNewUserInPhoneBook(data);
  }

  deleteUser = (id: DeleteUserRequest): Observable<HttpEvent<AddUserResponse>> => {
    return this.userApiService.deleteUser(id);
  }

  getUserById = (id: GetUserByIdRequest): Observable<HttpEvent<GetUserByIdResponse>> => {
    return this.userApiService.getUserById(id);
  }

  updateUser(data: UpdateUserRequest): Observable<UpdateUserResponse> {
    return this.userApiService.updateUser(data);
  }

  filterUserByName(data: string): Observable<HttpEvent<FilterUserResponse>> {
    return this.userApiService.filterUserByName(data);
  }
}
