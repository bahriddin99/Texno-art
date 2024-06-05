import request from "@services";
import {Brand} from "../../interfaces/brands";

export const brand:Brand = {
   post: (data)=> request.post("/brand/create" , data),
   delete: (id)=> request.delete(`/brand/delete/${id}`),
   get: ()=> request.get(`/brand/get-all/q`),
   update: (data)=> request.put(`/brand/update/${data.id}`, data.putData)
}