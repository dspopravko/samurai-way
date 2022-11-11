import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, AuthStateType} from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";

class HeaderClassComponent extends React.Component<HeaderPropsType, AuthStateType> {
    componentDidMount() {
        console.log('Header did mount!')
        this.props.getAuthUserData()
    }

    render() {
        const {isAuth,isFetchingAuth,messages,data,fieldsErrors,children} = {...this.props} // delete this props?
        return <Header
            isAuth={isAuth}
            login={data.login}
        />
    }
}

type MapStateToPropsType = AuthStateType
type MapDispatchToPropsType = {
    getAuthUserData: () => void
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
    getAuthUserData
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClassComponent)