import axios from '../helpers/axios.helper.';
import { SignUp } from '../interfaces/user.interface';

function UseCreateCount(user: SignUp) {
  return axios.post('/auth/sign-up', user);
}

export { UseCreateCount };
