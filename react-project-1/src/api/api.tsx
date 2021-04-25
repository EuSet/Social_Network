import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'bd25c1b4-72d5-4540-912d-5ef4c71f0544'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unFollowUser(id:number) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id:number) {
        return instance.post(`follow/${id}`,{}).then(response => response.data)
    },
    getUserProfile(userId:number) {
        return instance.get('profile/' + userId)
    }
}

export const authAPI = {
    authInSocNetwork() {
        return  instance.get(`auth/me`)
    },
}