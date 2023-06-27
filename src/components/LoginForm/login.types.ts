import { IUser } from '../../types/user.types';

export type LoginData = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: IUser;
  access_token: string;
};

export type LoginResponse = {
  login: AuthResponse;
};
