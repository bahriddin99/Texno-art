import request from "@services";
import {Brand} from "../../interfaces/brands";

export const brand:Brand = {
   get_brands: (params) => request.get("/brand-category/search", {params}),
  create_brand: (data: any) => request.post("/brand-category/create", data),
  delete_brand: (id: string) => request.delete(`/brand-category/delete/${id}`),
  update_brand: (id: string, data: any) => request.put(`/brand-category/update/${id}`, data),
}