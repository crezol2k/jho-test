import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "../share/errorMessage";
import { AUTH, EMAIL_ADDRESS, ME, PASSWORD } from "../../constant/auth";
import loginSchema from "./validate/loginSchema";
import { ILogin } from "../../models";
import "./login.css";


const LoginPage: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: ILogin) => {
    if (values.email === EMAIL_ADDRESS && values.password === PASSWORD) {
      localStorage.setItem(AUTH, "true");
      localStorage.setItem(
        ME,
        JSON.stringify({
          email: values.email,
          role: "admin",
        })
      );
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials", {
        theme: "dark",
      });
    }
  };

  return (
    <div id='login-page'>
      <div className='background-blur'></div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className='login-form'>
            <div className='login-form__logo'>
              <img src='/login/ogma.svg' alt='img-logo' />
            </div>

            <div className='login-form__header'>
              <h2 className='login-form__header--main-text'>Connexion</h2>
              <p className='login-form__header--sub-text mt-1'>
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry
              </p>
            </div>

            <div className='login-form__content'>
              <div className='login-form__content--input'>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  className='box-input'
                  required
                />
                <ErrorMessage name='email' />

                <Field
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='box-input'
                  required
                />
                <ErrorMessage name='password' />
              </div>

              <div className='forgot-password'>
                <span>Mot de passe oublié?</span>
              </div>

              <button className='main-button full-w mt-2' type='submit'>
                Connexion
              </button>

              <div className='or-break'>Or</div>
              <div className='login-with-social'>
                <div className='login-with-social__google'>
                  <img src='/login/google-icon.svg' alt='google-icon' />
                  <span>Continue with Google</span>
                </div>
                <div className='login-with-social__facebook'>
                  <img src='/login/facebook-icon.svg' alt='facebook-icon' />
                  <span>Continue with Facebook</span>
                </div>
              </div>
            </div>

            <div className='login-form__footer mt-1'>
              <span>Not a member?</span>
              <span className='inscription'>Inscription</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
