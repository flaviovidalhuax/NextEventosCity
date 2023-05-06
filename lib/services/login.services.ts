import axios from '../helpers/axios.helper.';
import { Login } from '../interfaces/user.interface';

function userLogin(user: Login) {
  return axios.post('/auth/login', user);
}

export { userLogin };
