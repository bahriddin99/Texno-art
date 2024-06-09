
// ----------------> Interface Services Brand <-------------------------------------
export interface postData{
    brand_name: string;
    brand_description: string;
    position:number|string;
    image:string;
}

export interface UpdateData{
    id?:number|undefined;
    putData: postData;
}


export interface Brand{
    get_brands: (params: any) => any;
  create_brand: (data: Brand) => any;
  delete_brand: (id: string) => any;
  update_brand: (id: string, data: Brand) => any;
}

// ---------> Interface Srore Brand <--------------------
export interface StoreBrand {
    brand: any[];
  isLoading: boolean;
  getBrands: (params: any) => Promise<any>;
  createBrand: (data: Brand) => Promise<any>;
  deleteBrand: (id: string) => Promise<any>;
  updateBrand: (id: string, data: Brand) => Promise<any>;
}

