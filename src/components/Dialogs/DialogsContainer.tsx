import React from "react";
import {ReduxStateType} from "../../redux/redux-store";
import {ChatType, sendMessageAC, updateNewMessageAC} from "../../redux/chats-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PageHeaderType} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    chats: ChatType[]
    pageHeader: PageHeaderType
}
type MapDispatchToPropsType = {
    inputHandler: (input: string, chatId: number) => void
    sendMessageCallback: (index: number, avatar: string, name: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({chats: state.chatsReducer, pageHeader: state.profileReducer.pageHeader})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        inputHandler: (input: string, chatId: number) => dispatch(updateNewMessageAC(input, chatId)),
        sendMessageCallback: (index: number, avatar: string, name: string) => dispatch(sendMessageAC(index, avatar, name))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);