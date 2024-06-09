import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { SigNin } from "@auth";
import { signInValidationSchema } from "@validation";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import Notifation from "@notifation";
import useRegisterStore from "@authstore";
import { useNavigate } from "react-router-dom";
import { useMask } from "@react-input/mask";
import { setDataToCookie } from "@cookies";
import login from "../../assets/login.jpg"

const Signin = () => {
  const {sig_nin} = useRegisterStore()
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  
  const initialValues: SigNin = {
    phone_number: "",
    password: "",
  };

  const handleSubmit = async (values: SigNin) => {

    const status = await sig_nin(values);
    if (status === 201) {
      setDataToCookie("access_token", status?.data?.data?.token);
      Notifation({title: "Xammasi nazorat ostida", type:"success"})
      navigate("/main");
     
    } else 
     Notifation({title: "xatolik mavjud", type:"error"})
  };

  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });


  return (
    <>
      <ToastContainer />
<div className="mb-5">
<img className="absolute h-[500px]" src={login} alt="login img" />
</div>
      <div className="   min-h-[360px]  w-[400px] ml-[650px] hover:shadow-black shadow-md border border-black rounded-md mt-[80px]  flex items-center justify-center flex-col gap-3 p-7  ">
        <h1 className="  text-[30px] font-bold mt-[-10px]">Tizimga kirish</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={signInValidationSchema}
            onSubmit={handleSubmit}
          >
            {/* {({ isSubmitting }) => ( */}
              <Form>
              <Field
                  name="phone_number"
                  type="tel"
                  as={TextField}
                  label="Telefon raqamingiz"
                  fullWidth
                  margin="normal"
                  size="small"
                  variant="outlined"
                  // inputRef={inputRef}
                  helperText={
                    <ErrorMessage
                      name="phone_number"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  label="Password"
                  fullWidth
                  margin="normal"
                  size="small"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="flex  justify-between mb-3 items-center ">
                  <p className="cursor-pointer" onClick={() => navigate("/signup")}>
                    Ro'yxatdan o'tish qismi
                  </p>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  // disabled={isSubmitting}
                  fullWidth
                >
                  {/* {isSubmitting ? "Submitting" : "Tizimga kirish"} */}
                       Tizimga kirish
                </Button>
              </Form>
            {/* )} */}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signin;
