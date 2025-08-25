import { Formik ,Field, Form  } from 'formik';
import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({username,  usenumber, usrid, onDelete  }) => {
     let userna= username;
     let usernumbe= usenumber;   
  return (
    <div>
 <Formik  initialValues={{name: userna,number:usernumbe }}>
            <Form className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md shadow-amber-600">
   <div className='flex items-center justify-evenly '>
<IoPersonCircleSharp className='size-13' />
     <Field  name="name" type="text" className='border-2 border-amber-600 rounded-lg'/>
     </div>
<div className='flex items-center justify-evenly ml-2.5 mt-3.5'>
   <BsFillTelephoneFill className='size-8' />
     <Field   name="number" type="text" className='border-2 border-amber-600 rounded-lg'/>
</div>
  <div>
 <button 
 onClick={() => onDelete(usrid)} 
 type="submit" className='border-1 bg-amber-300 rounded-lg hover:bg-amber-600 font-bold w-18 h-9 mt-4 ml-67'   >  Delete  </button>
  </div>
  </Form>
         </Formik>
    </div>
  )
}

export default Contact