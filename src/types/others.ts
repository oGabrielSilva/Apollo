import { IGenderForms } from './components';

export type Sizes = 12 | 16 | 20 | 25 | 45;

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  os: string;
  gender: IGenderForms;
};

export type SignInData = {
  os: string;
  email: string;
  password: string;
};

export interface IAxiosErrorData {
  code: string;
  message: string;
  status: number;
}
