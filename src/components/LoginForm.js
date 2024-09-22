import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../features/auth/authActions'; 
import '../styles/LoginForm.css'; 

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().required('Gmail obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(loginRequest(values));
    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} 
    validationSchema={validationSchema} 
    onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <h2>Log In</h2> 
          <div>
            <label htmlFor="email">Nombre de usuario</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'Ingresando...' : 'Ingresar'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
