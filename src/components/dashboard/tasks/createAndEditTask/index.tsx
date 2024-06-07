import { FC } from "react";
import "./task.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CheckIcon from "../../../../assets/icons/dashboard/check-circle.svg";

interface IProps {
  onClose: () => void;
}

const CreateAndEditTask: FC<IProps> = ({ onClose }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    note: Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    status: Yup.string().required("Status is required"),
    opportunity: Yup.string().required("Opportunity is required"),
  });

  const initialValues = {
    name: "",
    note: "",
    email: "",
    status: "",
    opportunity: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("values", values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='form-container'>
          <div className='header'>
            <h4>Éditer tâche</h4>
            <span onClick={onClose}>x</span>
          </div>
          <div className='body'>
            <div className='box-input-container'>
              <div className='box-input label-70 pr-2'>
                <Field
                  type='text'
                  name='name'
                  className='input-field'
                  placeholder='Titre de la tâche'
                />
              </div>

              <div className='box-input label-30'>
                <Field
                  type='text'
                  name='appel'
                  className='input-field'
                  placeholder='Appel'
                />
              </div>
            </div>

            <div className='box-input-container'>
              <div className='box-input label-70 pr-2'>
                <Field
                  type='text'
                  name='date'
                  className='input-field'
                  placeholder='Date'
                />
              </div>

              <div className='box-input label-30'>
                <Field
                  type='text'
                  name='time'
                  className='input-field'
                  placeholder='Time'
                />
              </div>
            </div>

            <div className='box-input-container'>
              <div className='box-input label-100'>
                <Field
                  type='text'
                  name='note'
                  className='textarea-field'
                  placeholder='Note'
                  as='textarea'
                />
              </div>
            </div>

            <div className='box-input-container'>
              <div className='box-input label-100'>
                <Field
                  type='text'
                  name='user'
                  className='input-field'
                  placeholder='Sébastien Hanouna'
                />
              </div>
            </div>
            <div className='break-line'></div>
            <div className='box-input-container'>
              <div className='box-input label-100'>
                <Field
                  type='text'
                  name='link'
                  className='input-field'
                  placeholder='Affaire Romain'
                />
              </div>
            </div>

            <div className='box-input-container'>
              <div className='box-input label-100'>
                <Field
                  type='text'
                  name='creadial'
                  className='input-field'
                  placeholder='Romain Gillig'
                />
              </div>
            </div>

            <div className='box-input-container'>
              <div className='box-input label-100'>
                <Field
                  type='text'
                  name='studio'
                  className='input-field'
                  placeholder='Studio Gillig'
                />
              </div>
            </div>
          </div>
          <div className='break-line mt-2'></div>
          <div className='footer'>
            <div className='footer-left d-flex align-center'>
              <img src={CheckIcon} alt='icon' />
              <span>Marquer comme réalisée</span>
            </div>
            <div className='footer-right'>
              <span>Annuler</span>
              <button
                type='submit'
                disabled={isSubmitting}
                className='main-button'
              >
                Enregistrer
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateAndEditTask;
