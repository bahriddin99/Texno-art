import { Button,  IconButton, InputAdornment,  TextField } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { SigNup } from "@auth";
import { useMask } from "@react-input/mask";
import { signUpValidationSchema } from "@validation";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import useRegisterStore from "@authstore";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {sig_nup} = useRegisterStore()
 const navigate = useNavigate()
  const initialValues: SigNup = {
    email: "",
    password: "",
    last_name: "",
    first_name: "",
    phone_numbe:  "",
  };

  const handleSubmit = async (values: SigNup) => {
  
    try {
      const response = await sig_nup(values);
      if (response.status === 201) {
        toast.success("You registrated");
        navigate("/");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  return (
    <>
      <ToastContainer />
      <div className="min-h-[200px] w-[400px] ml-[450px] hover:shadow-black shadow-md border border-black rounded-md mt-[60px] flex items-center justify-center flex-col  p-7 ">
        <h1 className="text-[35px] font-bold mt-[-10px]">Ro'yxatdan o'tish</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="last_name"
                  type="text"
                  as={TextField}
                  label="Last Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  size="small"
                  helperText={
                    <ErrorMessage
                      name="last_name"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="first_name"
                  type="text"
                  as={TextField}
                  label="First Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  size="small"
                  helperText={
                    <ErrorMessage
                      name="first_name"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  size="small"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                 <Field
                  name="phone_number"
                  type="tel"
                  as={TextField}
                  label="Telefon raqamingiz"
                  fullWidth
                  margin="normal"
                  size="small"
                  variant="outlined"
                  inputRef={inputRef}
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
                  variant="outlined"
                  size="small"
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
              
                
            
              <ErrorMessage
                name="gender"
                component="p"
                className="mb-3 text-red-500 text-center"
              />
                <div className="flex  justify-between mb-3 items-center ">
                  {/* <p className="cursor-pointer" onClick={() => navigate("/")}>
                    Ro'yxatdan o'tish qismi
                  </p> */}
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

export default Signup;
