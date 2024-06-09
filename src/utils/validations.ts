import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required"),
});
export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalit email").required("Email is require"),
  first_name: Yup.string()
    .required("first name is require"),
  last_name: Yup.string()
    .required("last name is require"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Passpord must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
});

export const brandValidationSchema = Yup.object().shape({
  brand_name: Yup.string().required("Name is required"),
  brand_description: Yup.string().required("Description is required"),
  position: Yup.number().min(0, "must be at least greater than 0").required("Position is required"),
  image: Yup.string().required("Image is required"),
});
export const ModalCategoryvalidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});
