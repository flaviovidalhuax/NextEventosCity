export interface User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  imageUrl: string;
  codePhone: string;
  phone: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface SignUp {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
