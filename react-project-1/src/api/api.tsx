import axios from "axios";
import {FormDataType} from "../components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'bd25c1b4-72d5-4540-912d-5ef4c71f0544'
    }
})
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>,
    data: D
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    },
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: {
        large: string | undefined
        small: string | undefined
    }
    userId: number
}
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unFollowUser(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`).then(response => response.data)
    },
    followUser(id: number) {
        return instance.post<ResponseType>(`follow/${id}`, {}).then(response => response.data)
    },
    getUserProfile(userId: number) {
        return instance.get<ProfileType>('profile/' + userId).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileStatus(userId: number) {
        return instance.get('/profile/status/' + userId)
    },
    updateProfileStatus(status: string) {
        return instance.put('/profile/status', {
            status: status
        })
    }
}

export const authAPI = {
    authInSocNetwork() {
        return instance.get(`auth/me`)
    },
    signInSocialNetwork(data: FormDataType) {
        return instance.post('/auth/login', {
            email: data.login,
            password: data.password,
            rememberMe: data.rememberMe
        })
    },
    signOut() {
        return instance.delete('/auth/login')
    }
}
