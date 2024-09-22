import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { saveProductRequest } from '../features/product/productActions'; 

const SaveProductForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Nombre es obligatorio'),
    brand: Yup.string().required('Marca es obligatoria'),
    model: Yup.string().required('Modelo es obligatorio'),
    data: Yup.array().of(
      Yup.object().shape({
        price: Yup.number().required('El precio es obligatorio'),
        color: Yup.string().required('El color es obligatorio'),
      })
    ).required('Los detalles del producto son obligatorios').min(1, 'Agrega al menos un detalle')
  });


  const handleSubmit = (values, { setSubmitting, resetForm }) => {

    dispatch(saveProductRequest(values));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', brand: '', model: '', data: [{ price: '', color: '' }] }} 
    validationSchema={validationSchema} 
    onSubmit={handleSubmit}>
      {({ isSubmitting, values }) => ( 
        <Form>
          <h2>Guardar Producto</h2>
          <div>
            <label htmlFor="name">Nombre</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="brand">Marca</label>
            <Field type="text" name="brand" />
            <ErrorMessage name="brand" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="model">Modelo</label>
            <Field type="text" name="model" />
            <ErrorMessage name="model" component="div" className="error" />
          </div>

          <h3>Detalles del Producto</h3>
          <FieldArray name="data">
            {({ push, remove }) => (
              <>
                {values.data.map((_, index) => (
                  <div key={index}>
                    <Field name={`data.${index}.price`} placeholder="Precio" />
                    <ErrorMessage name={`data.${index}.price`} component="div" className="error" />
                    
                    <Field name={`data.${index}.color`} placeholder="Color" />
                    <ErrorMessage name={`data.${index}.color`} component="div" className="error" />
                    
                    <button type="button" onClick={() => remove(index)}>Eliminar Detalle</button>
                  </div>
                ))}
                <button type="button" onClick={() => push({ price: '', color: '' })}>Agregar Detalle</button>
              </>
            )}
          </FieldArray>

          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'Guardando...' : 'Guardar Producto'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SaveProductForm;
