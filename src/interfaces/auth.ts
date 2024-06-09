export interface SigNin {
  phone_number: string;
  password: string;
}
export interface SigNup  {
  last_name: string;
  first_name: string;
  email:string;
  phone_number:string;
  password: string;

  
}
export interface AuthStore {
  data: any[];
  isLoading: boolean;
  sig_nin: (data: SigNin) => Promise<any>;
  sig_nup: (data: SigNup) => Promise<any>;
  getAdmin: (id:any) => Promise<any>;
  // logout: () => Promise<any>;
}

export interface Request {
  sig_nin: (data: SigNin) => any;
  sig_nup: (data: SigNup) => any;
  get_admin: (id:any) => any;
}
