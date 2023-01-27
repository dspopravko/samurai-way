import {apiInstance} from "./api-instance";
import {ProfileApi} from "./profile-api";

export const UsersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return apiInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUser(userId: number = 2) {
        console.warn("This method is deprecated, use ProfileApi")
        return ProfileApi.getUser(userId)
    },
    isUserFollowed(userId: number = 2) {
        return apiInstance.get(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId: number) {
        return apiInstance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data.resultCode === 0;
            }).catch(() => {
                return false
            })
    },
    unfollowUser(userId: number) {
        return apiInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode === 0;
            }).catch(() => {
                return false
            })
    }
}