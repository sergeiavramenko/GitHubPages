import axios from "axios";

const  baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY' : '94342576-929b-4c6f-9365-2e4f4eebe479'
    }
    });


export const usersAPI = {
    getUsers  (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(res => res.data )
    },
    post  (id)  {
        return  instance.post(baseUrl + `follow/${id}` ,  ).then(res => res.data )
    },

    del (id)  {
        return  instance.delete(baseUrl + `follow/${id}` ,  ).then(res => res.data )
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please ProfileApi obj')
        return    profileAPI.getProfile(userId)
        },
   }

export const profileAPI = {
    getProfile(userId) {
        return     instance.get( `profile/${userId}` )
    },
    getStatus(userId) {
        return     instance.get( `profile/status/${userId}` )
    },
    updateStatus(status) {
        return     instance.put( `profile/status` , {status: status});
    },
}

export const  authAPI = {
    me() {
        return  instance.get(`auth/me`, )
       }
}








