import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {ReduxStateType} from "../redux/redux-store";
import {connect} from "react-redux";

interface WithAuthProps { isAuth: boolean }

const mapStateToPropsAuth = ({authReducer}: ReduxStateType): WithAuthProps => {
    return { isAuth: authReducer.isAuth }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: WithAuthProps) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>
        return <Component {...restProps as T} />
    }

    return connect(mapStateToPropsAuth)(RedirectComponent)
}
