import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, AuthStateType, logout} from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";

class HeaderClassComponent extends React.Component<HeaderPropsType, AuthStateType> {
    render() {
        const {isAuth,isFetchingAuth,messages,data,fieldsErrors,children, logout} = {...this.props} // delete this props?
        return <Header
            logout={logout}
            isAuth={isAuth}
            login={data.login}
        />
    }
}

type MapStateToPropsType = AuthStateType
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = ({authReducer}: ReduxStateType): MapStateToPropsType => {
    return {
        data: authReducer.data,
        isFetchingAuth: authReducer.isFetchingAuth,
        messages: authReducer.messages,
        isAuth: authReducer.isAuth,
        fieldsErrors: authReducer.fieldsErrors
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    getAuthUserData,
    logout
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClassComponent)