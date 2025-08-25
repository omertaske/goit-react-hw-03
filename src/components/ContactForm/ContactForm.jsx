import {React} from 'react'
import { Formik, Field, Form, ErrorMessage  } from 'formik'
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import * as Yup from 'yup';
import {nanoid } from "nanoid"

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'İsim en az 3 karakter olmalı')
    .max(20, 'İsim en fazla 20 karakter olabilir')
    .required('İsim zorunludur'),
  number: Yup.string()
  .matches(/^[0-9]+$/, 'Sadece rakam girilebilir')
  .min(9, 'Numara en az 9 haneli olmalı').max(50,"numara en fazla 50 karakterden olusabilir")
  .required('Numara zorunludur'),
});

const ContactForm = ({ onAddContact }) => {
  return (
    <div>
     <Formik 
      validationSchema={ContactSchema} 
     initialValues={{ name: "", number: "" ,id : nanoid() }} 
  onSubmit={(values, { resetForm }) => {
        onAddContact(values); 
        resetForm(); // inputtemiz
        }}>
      <Form className="max-w-sm mx-auto p-6 bg-white rounded-2xl  shadow-amber-600 border-2 mt-4">
<div className='flex items-center justify-evenly'>
<IoPersonCircleSharp className='size-11'/>
  <label htmlFor="name" />
     <Field  name="name" type="text" className="bg-blue-300 rounded-2xl hover:bg-amber-500 mb-2 text-center " />
     <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />  
</div>
<div className='flex items-center justify-evenly'>
<BsFillTelephoneFill className='size-8'/>
  <label htmlFor="number" />
<Field name="number" type="tel" className="bg-blue-300 rounded-2xl hover:bg-amber-500 text-center" />
<ErrorMessage
                name="number"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
</div>
     <button type="submit" className='border-1 bg-blue-300 rounded-lg hover:bg-amber-500 font-bold w-25 h-14 mt-4 ml-57 '  >Add Contact</button>
        </Form>
     </Formik>
    </div>
  );
}


export default ContactForm;
