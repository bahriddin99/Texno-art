import { useEffect , } from "react";
import { ToastContainer ,} from "react-toastify";


import useBrandStore from "../../store/brands";
import  GlabalTable from "@globaltable";
import ModalBrand from "../../components/modal/modal-brands/modal-brands"
function Brands() {
  const {getBrand , dataBrands , isLoader} = useBrandStore();

  useEffect(() => {
    getBrand();
  }, []);


  const theder = [
    {title: "T/R" , value:"t/r"},
    {title: "Brand" , value:"brand_name"},
    {title: "Action" , value:"action"}
  ]

  return <>
    <ToastContainer />
    <div className="py-3 flex ml-[950px]">
      <ModalBrand title="post"/>
    </div>
    <GlabalTable heders={theder} body={dataBrands} skelatonLoader={isLoader}/>
  </>
}

export default Brands