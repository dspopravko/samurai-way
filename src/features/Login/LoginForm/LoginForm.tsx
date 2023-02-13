import React from "react";
import {Field, Form, Formik} from "formik";
import s from './LoginFrom.module.css'

export interface FormDataType {
    email: string
    password: string
    rememberMe: boolean
}

interface SendMessageFormInterface {
    onSubmit: (data: FormDataType, setSubmitting: (isSubmitting: boolean) => void ) => void
}

export const LoginForm = (props: SendMessageFormInterface) => {
    return (
        <div className={s.formContainer}>
            <Formik
                initialValues={{email: "demid1498@gmail.com", password: "Ex2X8KUZPbRnC!4", rememberMe: false}}
                onSubmit={(values: FormDataType, {resetForm, setSubmitting}) => {
                    props.onSubmit(values, setSubmitting)
                    resetForm()
                    setSubmitting(true)
                }}
            >
                {({touched, errors, isSubmitting}) => (
                    <Form name={'loginForm'}>
                        <div>
                          <span>Login:</span>
                          <Field type="email" name="email" placeholder="smith@gmail.com"/>
                            {touched.email && errors.email && <div>{errors.email}</div>}
                        </div>
                        <div>
                          <span>Password:</span>
                          <Field type="password" name="password" placeholder="secret!password"/>
                            {touched.password && errors.password && <div>{errors.password}</div>}
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                    </Form>)}
            </Formik>


        </div>
    )
}
