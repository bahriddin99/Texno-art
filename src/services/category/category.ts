import request from "@services";
import { Category} from "@category";

const category: Category = {
  get_categories: (params) => request.get("/category/search", {params}),
  create_category: (data: any) => request.post("/category/create", data),
  update_category: (id: number, data) => request.patch(`/category/update/${id}`, data),
  delete_category: (id: number) => request.delete(`/category/delete/${id}`),
  get_subcategory: (id: any) => request.get(`/sub-category/${id}`),

};

export default category;
