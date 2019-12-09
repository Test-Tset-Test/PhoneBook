export interface AddUserRequest {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  age: string;
  password: string;
}

export type AddUserResponse = void;

