import React from "react";
import n from './News.module.css';
import {Formik} from "formik";

const News = (props) => {
    return (
        <div>
            <UsersSearchForm/>
        </div>
    );
}
const usersSearchFormValidate = (values) => {
        const errors = {};
        return errors;

}
const UsersSearchForm = () => {

    const submit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }
    return <div>
        <Formik
            initialValues={{term: '',}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="term"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
}

export default News;