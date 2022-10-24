import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {AuthStateType, AuthType, authUser} from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";

class HeaderClassComponent extends React.Component<HeaderPropsType, AuthStateType> {
    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            response.data.resultCode === 0 && this.props.authUser(response.data, true)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return <Header
            resultCode={this.props.resultCode}
            login={this.props.data.login}
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
        isFetchingUsers: authReducer.isFetchingUsers,
        messages: authReducer.messages,
        resultCode: authReducer.resultCode,
        fieldsErrors: authReducer.fieldsErrors
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    authUser
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClassComponent)