import {apiInstance} from "./api-instance";

export const ProfileApi = {
    getUser(userId: number = 2) {
        return apiInstance.get(`profile/${userId}`)
            .then(response => response.data).catch(err => {
                console.log(err)
            })
    },
    getStatus(userId: number) {
        console.log('getting user status...')
        return apiInstance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return apiInstance.put(`profile/status`, {status})
    },
    updatePhoto(photoFile: File) {
        const data = new FormData()
        data.append('image', photoFile)
        return apiInstance.put(`profile/photo`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}