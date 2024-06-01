import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { SigNin } from "@auth";
import { signInValidationSchema } from "@validation";
import { useState } from "react";
import Notifation from "@notifation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import auth from "@auth-services";
import { setDataToCookie } from "@cookies";
import { useNavigate } from "react-router-dom";
// import login from "../../assets/login.jpg"

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const initialValues: SigNin = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: SigNin) => {
    try {
      const response = await auth.sig_nin(values)
      if(response.status === 200){
        setDataToCookie("access_token",response?.data.access_token)
        setDataToCookie("refresh_token",response?.data.refresh_token)
        setDataToCookie("id",response?.data?.id)
        localStorage.setItem("token",response.data.access_token)
        Notifation({title: "Xammasi joyda", type: "success"})
        
      }
      
    } catch (error) {
      console.log(error);
      Notifation({title: "Xatolik mavjud shef", type: "error"})
      
    }
  };

  return (
    <>
      <ToastContainer />
{/* <img className="absolute" src={login} alt="login img" /> */}
      <div className=" min-h-[360px] w-[400px] ml-[450px] hover:shadow-black shadow-md border border-black rounded-md mt-[80px] flex items-center justify-center flex-col gap-3 p-7 ">
        <h1 className="text-[30px] font-bold mt-[-10px]">Tizimga kirish</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={signInValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
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
                  disabled={isSubmitting}
                  fullWidth
                >
                  {isSubmitting ? "Submitting" : "Tizimga kirish"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signin;
