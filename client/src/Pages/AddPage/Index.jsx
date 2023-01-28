import React from 'react'
import {Helmet} from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import './Index.scss'
import axios from 'axios';
function Index() {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        date: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
          img: Yup.string()
          .required('Required'),
      });
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Add Page</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <div className='formContainer'>
     <h1>Add News</h1>
     <Formik
       initialValues={{
         name: '',
         date: '',
         img:''
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, {resetForm}) => {
         axios.post('http://localhost:8080/api/elements', values).then((res)=>console.log(res.data))
         resetForm();
         toast.success("Successfully added!");
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <div className='formik' >

            <Field name="name" placeholder='Name' className='input'/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="date" placeholder='date'className='input' />
           {errors.date && touched.date ? (
             <div>{errors.date}</div>
           ) : null}
           <Field name="img" placeholder='Src for IMG' className='input' />
           {errors.img && touched.img ? <div>{errors.img}</div> : null}



           <button className='addBtn' type="submit">Submit</button>
         
            </div>
           
         </Form>
       )}
     </Formik>
   </div>
   
    </>
  )
}

export default Index