import { SignInData } from '../types/others';
import Requests from '../Shared/Requests';

class SignIn extends Requests {
  constructor(url: string) {
    super(url);
  }

  public signIn({ email, os: device, password }: SignInData) {
    return this.getApi()({
      method: 'post',
      url: this.getUrl(),
      data: {
        email,
        device,
        password,
      },
    });
  }
}

export default SignIn;
