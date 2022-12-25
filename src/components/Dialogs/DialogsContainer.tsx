import React from "react";
import {ReduxStateType} from "../../redux/redux-store";
import {ChatType, sendMessageAC, updateNewMessageAC} from "../../redux/chats-reducer";
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
    inputHandler: (input: string, chatId: number) => void
    sendMessageCallback: (index: number, avatar: string | null, name: string, messageText: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    chats: state.chatsReducer,
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        inputHandler: (input: string, chatId: number) => dispatch(updateNewMessageAC(input, chatId)),
        sendMessageCallback: (index: number, avatar: string | null, name: string, messageText: string) => dispatch(sendMessageAC(index, avatar, name, messageText))
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)
export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);