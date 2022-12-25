import {Field, Form, Formik} from "formik";
import React from "react";

export interface FormDataType {
    messageText: string
}

interface SendMessageFormInterface {
    initialValue?: string
    placeholder?: string
    onSubmit: (data: FormDataType) => void
}

export const SendMessageForm = (props: SendMessageFormInterface) => {
    return (
        <Formik
            initialValues={{
                messageText: props.initialValue || ''
            }}
            onSubmit={( values: FormDataType, {resetForm} ) => {
                props.onSubmit(values)
                resetForm()
            }}
        >
            <Form>
                <Field id="messageText" name="messageText" placeholder={props.placeholder} />
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}