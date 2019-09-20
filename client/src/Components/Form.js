import React from 'react';
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const AccountForm = ({ errors, touched, values, status }) => {

    return (
        <Form>
            <Field type="text" name="username" placeholder="Username" />
            {/* // ! Print error when value is false for the field.
             */}
            {touched.username && errors.username && (
                <p>{errors.username}</p>
            )}
            <Field type="password" name="password" placeholder="Password" />
            {/* // ! Print error when value is false for the field.
             */}
            {touched.password && errors.password && (
                <p>errors.password</p>
            )}
            <Field type="text" name="email" placeholder="email" />
            {/* // ! Print error when value is false for the field.
             */}
            {touched.email && errors.email && (
                <p>errors.email</p>
            )}

                {/* // * TOS Checkbox
                 */}
            <label>
                Terms of service
                <Field type="checkbox" name="terms" checked={values.terms}/>
            </label>

            <button>Submit!</button>
        </Form>
    )
}

const FormikForm = withFormik({
    // ? STATE TRACKER
    mapPropsToValues({ username, password, email, terms }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            terms: terms || ""
        };
    },
    // ! REQUIRED && RETURN STRING OTHERWISE
    validationSchema: Yup.object().shape({
        username: Yup.string().required(`Username must not be empty!`),
        email: Yup.string().required(`Email must not be empty!`),
        password: Yup.string().required(`Password must not be empty!`)
    })

    // TODO REMINDER: HANDLESUBMIT SYNTAX HERE
    // * TODO AXIOS CALL ALONG SUBMIT HERE
})(AccountForm);

export default FormikForm;