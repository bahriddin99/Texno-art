export interface Header {
    title:string,
    value:string
}
export interface Body {
    id: number,
    [key:string]:any
}

export interface TableProps {
    heders: Header[],
    body: Body[];
    isLoading?: boolean,
    skelatonLoader: boolean;
    deletIdData?:(id:string)=> any;
    // editeItem:(item:any)=>void
}