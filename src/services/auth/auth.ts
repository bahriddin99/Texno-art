import request from "@services";
import { Request } from "@auth";

const auth:Request = {
    sig_nin: (data)=>request.post('/auth/sign-in', data),
    sig_nup: (data)=>request.post("/auth/admin/sign-up", data),
    get_admin: (id) => request.get(`/admin/${id}`),
}

export default auth