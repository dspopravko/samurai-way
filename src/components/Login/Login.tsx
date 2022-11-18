import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FromDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

export const Login = () => {
    const onSubmitHandler = (formData: FromDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
}

const LoginForm: React.FC<InjectedFormProps<FromDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        )
}

const LoginReduxForm = reduxForm<FromDataType>({
    form: 'login'
})(LoginForm)
