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
// import login from "../../assets/login.jpg"

const Signin = () => {
  const {sig_nin} = useRegisterStore()
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  
  const initialValues: SigNin = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: SigNin) => {

    const status = await sig_nin(values);
    if (status === 201) {
      navigate("/main");
      Notifation({title: "Xammasi nazorat ostida", type:"success"})
     
    } else 
     Notifation({title: "xatolik mavjud", type:"error"})
  };

  return (
    <>
      <ToastContainer />
{/* <img className="absolute" src={login} alt="login img" /> */}
      <div className="   min-h-[360px]  w-[400px] ml-[450px] hover:shadow-black shadow-md border border-black rounded-md mt-[80px] flex items-center justify-center flex-col gap-3 p-7  ">
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
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  size="small"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
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
                       test
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
