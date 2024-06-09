export interface BrandCategoryRequest {
   get_brand_category: (params: any) => any;
   create_brand_category: (data: any) => any;
   delete_brand_category: (id: number) => any;
   update_brand_category: (id: number, data: any) => any;
 }



 export interface BrandCategoryStore {
   brand_category: any[];
   isLoading: boolean;
   getBrandCategory: (params: any) => Promise<any>;
   createBrandCategory: (data: any) => Promise<any>;
   deleteBrandCategory: (id: number) => Promise<any>;
   updateBrandCategory: (id: number, data: any) => Promise<any>;
 }