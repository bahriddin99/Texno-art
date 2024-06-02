import request from "@services";
import { Category } from "@category";

const category: Category = {
  create_category: (data) => request.post("/category/create", data),
};

export default category;
