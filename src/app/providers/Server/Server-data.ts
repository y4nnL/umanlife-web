export interface SigninData {
  email: string;
  password: string;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
}

export interface ForgotData {
  email: string;
}

export interface PasswordData {
  password: string;
}

export interface TokenData {
  token: string;
}
