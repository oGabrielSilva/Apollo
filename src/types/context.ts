/* eslint-disable no-unused-vars */
export interface IContext {
  userInfo: TUser;
  sessionInfo: TSession;
  setUserData: (value: IUserData) => void;
  handleLogOut: () => void;
}

export type TSession = {
  __v: number;
  _id: string;
  createdAt: string;
  device: string;
  id: string;
  lastLogin: string;
  object: string;
} | null;

export type TUser = {
  avatar: string;
  email: string;
  gender: string;
  id: string;
  name: string;
} | null;

export interface IUserData {
  user: TUser;
  session: TSession;
}
