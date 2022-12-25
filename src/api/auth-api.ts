import {apiInstance} from "./api-instance";

export const authAPI = {
    me() {
        return apiInstance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return apiInstance.post('auth/login', {email, password, rememberMe})
            .then(response => {
            return response.data
        })
    },
    logout() {
        return apiInstance.delete('auth/login')
            .then(response => {
                return response.data
            })
    }
}