export interface CategoryCreate {
    category_name: string,
    parent_category_id: number,
    positon:number 
}




export interface Category {
    create_category: (data:CategoryCreate)=>any
}