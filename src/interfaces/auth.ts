export interface SigNin {
  email: string;
  password: string;
}
export interface SigNup extends SigNin {
  last_name: string;
  first_name: string;
  phone_numbe:string;
  
}
export interface AuthStore {
  data: any[];
  isLoading: boolean;
  sig_nin: (data: SigNin) => Promise<any>;
  sig_nup: (data: SigNup) => Promise<any>;
  // logout: () => Promise<any>;
}

export interface Request {
  sig_nin: (data: SigNin) => any;
  sig_nup: (data: SigNup) => any;
}
