import * as axios from 'axios';

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1293ddc9-210a-41ce-ae0b-4a2c4eb36d24',
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageUsersSize = 10) {
        return instans.get(`users?page=${currentPage}&count=${pageUsersSize}`)
    },
    follow(id) {
        return instans.post(`follow/${id}`)
    },
    unfollow(id) {
        return instans.delete(`follow/${id}`)
    },
};

export const profileAPI = {
    getProfile(id) {
        return instans.get(`profile/${id}`)
    },
    getStatus(id) {
        return instans.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instans.put(`profile/status`, { status: status })
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instans.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    },
    saveProfile(profile) {
        return instans.put(`profile`, profile)
    },
};

export const authAPI = {
    me() {
        return instans.get(`auth/me`)
    },
    login(email, password, rememberMe=false, captcha=null) {
        return instans.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instans.delete(`auth/login`)
    },
};
export const securityAPI = {
    getCaptchaUrl() {
        return instans.get(`security/get-captcha-url`);
    },
};
