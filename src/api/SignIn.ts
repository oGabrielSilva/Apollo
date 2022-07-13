import { SignUpData } from '../types/others';
import Requests from './Requests';

class SignUp extends Requests {
  constructor() {
    super();
    this.setUrl(`${this.getBase()}/account/create`);
  }

  public signUp({ email, name, os: device, gender, password }: SignUpData) {
    this.getApi()({
      method: 'post',
      url: this.getUrl(),
      data: {
        email,
        name,
        device,
        gender,
        password,
      },
    })
      .then((response) => {
        console.log('Oi');
        return response.data;
      })
      .catch((e) => e.response.data);
  }
}

export default SignUp;
