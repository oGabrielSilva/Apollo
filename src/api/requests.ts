import axios from 'axios';
import { SignUpData } from '../types/others';

const url = '';

const signUp = async ({ email, name, os, password }: SignUpData) => {
  const response = await axios({
    method: 'post',
    url,
    data: {
      email,
      name,
      os,
      password,
    },
  });

  console.log(response);
};

const api = { signUp };

export default api;
