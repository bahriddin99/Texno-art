
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
    post : (data:postData)=> any,
    delete : (id:number)=> any,
    get : ()=> any,
    update : (data:UpdateData)=> any,
}

// ---------> Interface Srore Brand <--------------------
export interface StoreBrand {
    isLoader:boolean;
    dataBrands:any[];
    totlCount:number;
    getBrand: ()=> Promise <any>;
    postBrand: (data:postData)=> Promise <any>;
    deleteBrand: (id:number)=> Promise <any>;
    updateBrand: (data:UpdateData)=> Promise <any>;
}

