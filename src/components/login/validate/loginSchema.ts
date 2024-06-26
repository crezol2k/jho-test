import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

export default loginSchema;
