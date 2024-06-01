export interface SigNin {
  email: string;
  password: string;
}
export interface SigNup extends SigNin {
  last_name: string;
  first_name: string;
  phone_numbe:string;
  
}

export interface Request {
  sig_nin: (data: SigNin) => any;
  sig_nup: (data: SigNup) => any;
}
