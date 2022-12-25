import React from 'react';
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {LoginForm} from "./LoginForm/LoginForm";
import {ReduxStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type FromDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

interface LoginInterface {
    login: (email: string, password: string, rememberMe: boolean, setSubmitting: (isSubmitting: boolean) => void) => void,
    isAuth: boolean
}

const Login = (props: LoginInterface) => {
    const onSubmitHandler = (formData: FromDataType, setSubmitting: (isSubmitting: boolean) => void) => {
        props.login(formData.email, formData.password, formData.rememberMe, setSubmitting)
    }
    if (props.isAuth) return <Redirect to={'profile'}></Redirect>
    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmitHandler}/>
        </div>
    );
}

const mapStateToProps = ({authReducer}: ReduxStateType) => ({isAuth: authReducer.isAuth})

export default connect(mapStateToProps, {login, logout})(Login)