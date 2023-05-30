import React from 'react'
import './add.scss'
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Post } from '../../api/request';



    const Add = () => {
  const formik = useFormik({
    initialValues: {
      name:String,
      age: Number,
      image: String,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      age: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        image: Yup.string().required('Required'),
    }),
    onSubmit: values => {
    Post(values)
  formik.resetForm()
    },
  });
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ADD</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
      
            <label htmlFor="age">Last Name</label>
            <input
              id="age"
              name="age"
              type="number" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <div>{formik.errors.age}</div>
            ) : null}
      
            <label htmlFor="image">image Address</label>
            <input
              id="image"
              name="image"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
            />
            {formik.touched.image && formik.errors.image ? (
              <div>{formik.errors.image}</div>
            ) : null}
      
            <button type="submit">Submit</button>
          </form>
        </div>
    )
}

export default Add
