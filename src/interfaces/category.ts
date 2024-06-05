export interface CategoryCreate {
    category_name: string,
    parent_category_id: number,
    positon:number 
}
export interface postCategory{
    category_name: string,
    parent_category_id?: number | null ,
    positon?: number | null
}
export interface UpdateCategory {
    id:number;
    updateData : postCategory
}

export interface StoreCategory {
    isLoader:boolean;
    dataCategory:any[];
    dataSubCategory:any[];
    totlCount:number;
    subCategoryCount:number;
    getDataCategory: ()=> Promise <any>;
    postDatacategory: (data:postCategory)=> Promise <any>;
    deleteDataCategory: (id:number)=> Promise <any>;
    updateDataCategory: (data:UpdateCategory)=> Promise <any>;
    getDataSubCategoryId: (id:number)=> Promise <any>;
}



export interface Category {
    getCatigory : ()=> any,
    postCatigory : (data:postCategory)=> any,
    deleteCategory : (id:number)=> any,
    updateCategory : (data:UpdateCategory)=> any,
    getSubCategoryId: (id:number)=> any,
}