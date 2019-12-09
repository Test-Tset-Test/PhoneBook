import {Injectable} from '@angular/core';
import {UserApiService} from '../api/user.api.service';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import {AddUserRequest, AddUserResponse} from '../api/Model/user.model';
import {HttpEvent} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private userApiService: UserApiService) {
  }

  getUserList = (): Observable<HttpEvent<AddUserResponse>> => {
    return this.userApiService.getUserListApi();
  }

  addNewUserInPhoneBook = (data: UserModel): Observable<AddUserResponse> => {
    const payLoad: AddUserRequest = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.password,
      age: data.age,
    };
    return this.userApiService.addNewUserInPhoneBook(payLoad);
  };

  deleteUser = (id: UserModel): Observable<HttpEvent<AddUserResponse>> => {
    return this.userApiService.deleteUser(id);
  }

  getUserById = (id: string): Observable<HttpEvent<AddUserResponse>> => {
    return this.userApiService.getUserById(id);
  }

  updateUser(data: AddUserRequest): Observable<AddUserResponse> {
    return this.userApiService.updateUser(data);
  }

  filterUserByName(data: string): Observable<HttpEvent<AddUserResponse>> {
    return this.userApiService.filterUserByName(data);
  }
}
