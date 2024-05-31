export interface SigNin {
email:string,
password:string
}


export interface Request {
    sig_nin:(data:SigNin)=>any
}