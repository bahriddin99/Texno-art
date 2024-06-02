import { useEffect, useState } from "react";
import category from "@category-services";
import GlobalPagination from "@globalpaganation";
import GlobalTable from "@globaltable"
import "./index.scss"

const Category = () => {
  const [data, setData] = useState([]);
  const [params,setParams] = useState({
    limit:10,
    page:1
  })
  // useEffect(()=>{
  //   const response =  category.create_category(params)
  //   setData(response?.data?.services)
  // },[params])
  const headers =[
    { title: "T/R", value: "index" },
    { title: "Positon", value: "positon" },
    { title: "Category Name", value: "category_name" },
    { title: "Action", value: "action" },
  ]
  // const totleCuont2 = Math.ceil(totlCount / params?.limit);
  const changePage = (value: number) => {
    setParams((preParams) => ({
      ...preParams,
      page: value,
    }));
  };
  return (
    <div>
      <GlobalTable body={data} headers={headers}/>
      <GlobalPagination
            // totleCuont={totleCuont2}
            page={params?.page}
            setParams={changePage}
          />
    </div>
  )
}

export default Category