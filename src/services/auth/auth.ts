import request from "@services";
import { Request } from "@auth";

const auth:Request = {
    sig_nin: (data)=>request.post("/login", data)
}

export default auth