import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import GlobalPagination from "@globalpaganation";
import useCategoryStore from "@categorystore";
import ModalCategory from "../../components/modal/modal-category/modal-category";
import GlobalTable from "@globaltable"
import "./index.scss"

const Category = () => {
  const {getDataCategory , dataCategory , isLoader} =  useCategoryStore();
  const [params,setParams] = useState({
    limit:10,
    page:1
  })

  useEffect(() =>{
    getDataCategory();
  },[]);
 
  const headers =[
    { title: "T/R", value: "t/r" },
    { title: "Category", value: "category_name" },
    { title: "Action", value: "action2" },
  ]
  const changePage = (value: number) => {
    setParams((preParams) => ({
      ...preParams,
      page: value,
    }));
  };

  return (
    <div>
      <ToastContainer />
      <div className="py-3 flex ml-[960px]">
      <ModalCategory title="post"/>
    </div>
      <GlobalTable body={dataCategory} heders={headers} skelatonLoader={isLoader}/>
      <GlobalPagination
            // totleCuont={totleCuont2}
            page={params?.page}
            setParams={changePage}
          />
    </div>
  )
}

export default Category