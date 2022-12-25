import {apiInstance} from "./api-instance";
import {AxiosResponse} from "axios";
import {MMessage} from "../models/MMessage";
import {apiResponseType} from "./api-responseType";
import {DialogType} from "../models/MDialog";

export const messagesAPI = {
    raiseDialog(userID: number) {
        return apiInstance.put<null, AxiosResponse<apiResponseType<any>>>(`dialogs/${userID}`)
    },
    getAllDialogs() {
        return apiInstance.get<DialogType[]>(`dialogs`)
    },
    getMessages(userID: number, page: number = 1, pageSize: number = 10) {
        return apiInstance.get<{error: [], items: MMessage[], totalCount: number}>(`dialogs/${userID}/messages?page=${page}&count=${pageSize}`)
    },
    sendMessage(userID: number, body: string){
        return apiInstance.post<{body: string}, AxiosResponse<apiResponseType<{message: MMessage}>>>(`dialogs/${userID}/messages`, {body})
    },
    isViewedMessage (messageID: string){
        return apiInstance.get<boolean>(`dialogs/messages/${messageID}/viewed`)
    },
    putMessageToSpam (messageID: string) {
        return apiInstance.post(`dialogs/messages/${messageID}/spam`)
    },
    deleteMessage (messageID: string) {
        return apiInstance.delete(`dialogs/messages/${messageID}`)
    },
    restoreMessage (messageID: string) {
        return apiInstance.put(`dialogs/messages/${messageID}/restore`)
    },
    filterByDate (userID: number, date: string) {
        return apiInstance.put(`dialogs/${userID}/messages/new?newerThen=${date}`)
    },
    newMessagesCount () {
        return apiInstance.get<number>(`dialogs/messages/new/count`)
    }

}