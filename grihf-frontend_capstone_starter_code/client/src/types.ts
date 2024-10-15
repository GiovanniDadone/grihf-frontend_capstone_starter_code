export interface LoginProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoggedIn: boolean;
  email: string;
  setEmail: (email: string) => void;
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface RegisterProps {
  username: string;
  password: string;
  email: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}
 export interface DoctorProps {
  id: number;
  name: string;
  specialization: string;
  yearsOfExperience: number;
 }

 export interface HomeProps {
  isLoggedIn: boolean;
 }