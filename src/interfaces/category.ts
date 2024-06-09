export interface CategoryCreate {
    category_name: string,
    parent_category_id: number,
    positon:number 
}
export interface postCategory{
   name:string
}
export interface UpdateCategory {
    id:number;
    updateData : postCategory
}

export interface GetCategory {
    limit?:number,
    page?:number,
    search?: string,
} 

export interface StoreCategory {
    categories: any[];
    subCategories: any[];
    isLoading: boolean;
    getCategories: (params: any) => Promise<any>;
    createCategory: (data: any) => Promise<any>;
    updateCategory: (id: number, data: any) => Promise<any>;
    deleteCategory: (id: number) => Promise<any>;
    getSubCategory: (id: any) => Promise<any>;
}



export interface Category {
    get_categories: (params: any) => any;
    create_category: (data: any) => any;
    update_category: (id: number, data: any) => any;
    delete_category: (id: number) => any;
    get_subcategory: (id: any) => any;
}