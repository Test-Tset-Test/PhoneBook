export interface UserInfo {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  age: string;
}
export interface AddUserRequest {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  age: string;
  password: string;
}
export type AddUserResponse = void;

export type UpdateUserRequest = UserInfo;
export type UpdateUserResponse = void;

export type UserListRequest = void;
export interface UserListResponse extends UserInfo {
  id: string;
};

export type GetUserByIdRequest = UserInfo;
export type GetUserByIdResponse = UserInfo;

export type FilterUserRequest = UserInfo;
export type FilterUserResponse = UserInfo[];

export type DeleteUserRequest = {id: string};
export type DeleteUserResponse = void;
