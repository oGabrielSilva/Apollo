import { SignUpData } from '../types/others';
import Requests from '../Shared/Requests';

class SignUp extends Requests {
  constructor(url: string) {
    super(url);
  }

  public signUp({ email, name, os: device, gender, password }: SignUpData) {
    return this.getApi()({
      method: 'post',
      url: this.getUrl(),
      data: {
        email,
        name,
        device,
        gender,
        password,
      },
    });
  }
}

export default SignUp;
