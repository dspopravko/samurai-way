import * as axios from "axios";

const instance = axios.default.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4f75b79d-af09-4141-9f0e-f229ac4ac21f'
    }
})

export const UsersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data).catch(err => {
                console.log(err)
            })
    },
    getUser(userId: number = 2) {
        console.warn("This method is deprecated, use ProfileAPI")
        return ProfileAPI.getUser(userId)
    },
    isUserFollowed(userId: number = 2) {
        return instance.get(`follow/${userId}`)
            .then(response => {
                return response.data
            }).catch(err => {
                console.log(err)
            })
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data.resultCode === 0;
            }).catch(err => {
                console.log(err)
                return false
            })
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode === 0;
            }).catch(err => {
                console.log(err)
                return false
            })
    }
}

export const ProfileAPI = {
    getUser(userId: number = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data).catch(err => {
                console.log(err)
            })
    },
    getStatus(userId: number) {
        console.log('getting user status...')
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`,{status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        }).catch(err => {
            console.log(err)
        })
    }
}