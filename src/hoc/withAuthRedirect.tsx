import React from 'react';
import {ReduxStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

interface WithAuthProps { isAuth: boolean }

const mapStateToPropsAuth = ({authReducer}: ReduxStateType): WithAuthProps => {
    return { isAuth: authReducer.isAuth }
}

export function withAuthRedirect <WRP>(Component: React.ComponentType<WRP>) {

    const WithRedirect: React.FC<WithAuthProps> = (props) => {
        const {isAuth, ...restProps} = props
        return isAuth ? <Component {...restProps as WRP} /> : <Redirect to={'/login/'}/>
    }

    return connect<WithAuthProps, {}, WRP, ReduxStateType>(mapStateToPropsAuth)(WithRedirect)
}
