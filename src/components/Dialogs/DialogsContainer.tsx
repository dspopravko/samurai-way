import React from "react";
import {ReduxStateType} from "../../redux/redux-store";
import {ChatType, sendMessageAC, updateNewMessageAC} from "../../redux/chats-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {chats: ChatType[]}
type MapDispatchToPropsType = {
    inputHandler: (input: string, chatId: number) => void
    sendMessageHandler: (index: number) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({chats: state.chatsReducer})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        inputHandler: (input: string, chatId: number) => dispatch(updateNewMessageAC(input, chatId)),
        sendMessageHandler: (index: number) => dispatch(sendMessageAC(index))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);