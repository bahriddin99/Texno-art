export interface Header {
    title:string,
    value:string
}
export interface Body {
    id: number,
    [key:string]:any
}

export interface TableProps {
    columns: {
      title: string;
      dataIndex: string;
      key: string;
      render?: any;
    }[];
    data: { key: string; name: string }[];
    boolean: boolean;
  }