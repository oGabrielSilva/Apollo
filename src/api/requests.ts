import axios from 'axios';
import { SignUpData } from '../types/others';

const base = 'https://test-apollo-api.herokuapp.com';

const signUp = async ({
  email,
  name,
  os: device,
  gender,
  password,
}: SignUpData) => {
  const url = `${base}/account/create`;
  axios({
    method: 'post',
    url,
    data: {
      email,
      name,
      device,
      gender,
      password,
    },
  }).catch((e) => console.log({ e: e.response.data }));
};

const api = { signUp };

export default api;
