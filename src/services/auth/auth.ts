import request from "@services";
import { Request } from "@auth";

const auth:Request = {
    sig_nin: (data)=>request.post('/admin/login', data),
    sig_nup: (data)=>request.post("/admin/create", data)
}

export default auth