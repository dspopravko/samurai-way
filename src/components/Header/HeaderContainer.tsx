import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {AuthStateType, AuthType, authUser} from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";

class HeaderClassComponent extends React.Component<HeaderPropsType, AuthStateType> {
    componentDidMount() {
        const {resultCode,isFetchingAuth,authUser,messages,data,fieldsErrors,children} = {...this.props} // delete this props?

        axios.default.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            response.data.resultCode === 0 && authUser(response.data, true)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const {resultCode,isFetchingAuth,authUser,messages,data,fieldsErrors,children} = {...this.props} // delete this props?
        return <Header
            isAuth={resultCode === 0}
            login={data.login}
        />
    }
}

type MapStateToPropsType = AuthStateType
type MapDispatchToPropsType = {
    authUser: (payload: AuthType, isFetching: boolean) => void
}
export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = ({authReducer}: ReduxStateType): MapStateToPropsType => {
    return {
        data: authReducer.data,
        isFetchingAuth: authReducer.isFetchingAuth,
        messages: authReducer.messages,
        resultCode: authReducer.resultCode,
        fieldsErrors: authReducer.fieldsErrors
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    authUser
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClassComponent)