import React from "react";
import {ReduxStateType} from "../../redux/redux-store";
import {ChatType, sendMessageAC} from "../../redux/chats-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    chats: ChatType[]
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessageCallback: (index: number, avatar: string | null, name: string, message: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    chats: state.chatsReducer,
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessageCallback: (index: number, avatar: string | null, name: string, message: string) => dispatch(sendMessageAC(index, avatar, name, message))
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);