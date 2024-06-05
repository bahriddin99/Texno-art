import request from "@services";
import { Category} from "@category";

const category: Category = {
    getCatigory: ()=> request.get(`/category/get-all-category/q`),
    postCatigory: (data)=> request.post("/category/create" , data),
    deleteCategory: (id)=> request.delete(`/category/delete/${id}`),
    updateCategory: (data)=> request.put(`/category/update/${data.id}`, data.updateData),
    getSubCategoryId: (id)=> request.get(`/api/category/get-all-subcategory/${id}/q`)
};

export default category;
