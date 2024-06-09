import { useEffect , useState } from "react"
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import auth from "@auth-services";
import{getDataFromCookie } from "@cookies"


function Setting() {
     const navigate = useNavigate();
    const [adminData, setAdminData] = useState<any>({});
    const adminId = Number(getDataFromCookie("admin_id"));
    

    const getAdminData = async(id:number) => {
        try{
            const respons = await auth.get_admin(id)
            if(respons.status === 200){
                setAdminData(respons.data.data)
            }
             
        }catch(err){
            console.log(err)
        }
    }

useEffect(()=>{
    
    getAdminData(adminId);

},[]);




 const addAccount = () => {
    navigate("/")
 }


  return <>
  <ToastContainer />
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex flex-col  md:flex-row items-center justify-around">
        <div>
            <img src="https://t4.ftcdn.net/jpg/03/59/09/01/360_F_359090172_vsL1da5fNVENKKMoQTq7NSwPPrllQcRB.jpg" alt="Admin img" />
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-[60px]">
            <div className="flex flex-col items-start gap-3">
                <div>
                   <h2 className=" inline-block border-b">First name</h2>
                    <h1 className="text-[18px] font-semibold">{adminData?.first_name}</h1>
                </div>
                <div>
                   <h2 className=" inline-block border-b">Last name</h2>
                    <h1 className="text-[18px] font-semibold">{adminData?.last_name}</h1>
                </div>
                <div>
                   <h2 className=" inline-block border-b">Phone number</h2>
                    <h1 className="text-[18px] font-semibold">{adminData?.phone_number}</h1>
                </div>
            </div>
            <div className="flex flex-col items-start gap-3">
                <div>
                   <h2 className=" inline-block border-b">Email</h2>
                    <h1 className="text-[18px] font-semibold">{adminData?.email}</h1>
                </div>
                <div>
                    <h2 className=" inline-block border-b">Created at</h2>
                    <h1 className="text-[18px] font-semibold">{adminData?.createdAt ? adminData?.createdAt.slice(0, 10) :"" }</h1>
                </div>
                <div>
                    <h2 className=" inline-block border-b">Updated at</h2>
                    <h1 className="text-[18px] font-semibold">{adminData?.lastUpdateAt ? adminData?.lastUpdateAt.slice(0, 10) :"" }</h1>
                </div>
                <div className="flex items-center gap-4">
                   
                    <button onClick={addAccount} className="py-2 px-5 rounded-md bg-button text-white font-medium  ">+ add acount</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Setting