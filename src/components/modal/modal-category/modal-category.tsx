import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { Button, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

import useCategoryStore from "../../../store/category";
import {postCategory} from "@category"
import { ModalCategoryvalidationSchema } from "@validation";
import Notifation from "@notifation";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface propsData{
  title: string;
  id?: number;
  data?: any;
}

export default function ModalCategory({title , id , data}:propsData) {
  const { postDatacategory , updateDataCategory } = useCategoryStore();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 

 

  const initialValues: postCategory = {
    category_name: data?.category_name || "", 
    // positon: data?.positon || "",
  };

  const handelSubmit = async (value:postCategory ) => {
    const postValue = { category_name: value.category_name , parent_category_id:null , positon: null}
    if(!id){
      const status = await postDatacategory(postValue);
      if (status === 201) {
      toast.success("success full");
      Notifation({title: "Xammasi joyda", type: "success"})
      } else {
        Notifation({title: "Xatolik mavjud", type: "error"})
       handleClose();
      }
    }else{
      const updateData= {id:id, updateData : postValue}
      const status = await updateDataCategory(updateData);
      if (status === 200) {
     Notifation
      handleClose();
      } else {
       toast.error("Error :" + status);
       handleClose();
      }
    }
  };


  return (
    <div>
      {
        title == "post" ? 
        <button
        onClick={handleOpen}
        className="py-2 px-6 text-white font-semibold bg-button rounded-lg"
      >
        To add
      </button> : 
      <Button
        // color="inherit"
        onClick={handleOpen}
        sx={{ 
          color: '#767676' 
        }}
      >
       <div className="text-green-500"> <EditIcon  /></div>
      </Button>
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={ModalCategoryvalidationSchema}
            onSubmit={handelSubmit}
          >
            <Form className=" max-w-[600px]  w-full flex flex-col gap-[12px]">
              <h1 className="text-center mb-2 text-[26px] font-bold">
                {
                  title == "post"? "Add a category" : "Edit a category"
                }
              </h1>
              <Field
                as={TextField}
                label="Category name"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="text"
                name="category_name"
                className=" w-[100%]  mb-3 outline-none py-0"
                helperText={
                  <ErrorMessage
                     name="category_name"
                     component="p"
                     className="mb-3 text-red-500 text-center"
                  />
                }
              />
              
              <Button
                sx={{ fontSize: "16px", fontWeight: "600" ,backgroundColor: "#1769aa" }}
                variant="contained"
                type="submit"
                className="w-[100%] py-3"
              >
                to add
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
