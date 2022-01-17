import axios from 'axios'
import {
    getToken,
} from '@/utils/auth'
import router from '../router/index'
// 创建axios实例

const service = axios.create({
    baseURL: window.g.BASE_API, // api的base_url  window.location.origin+'/wxdata'
    timeout: 1500 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    if (getToken()) {
        config.headers['access_token'] = getToken() // 让每个请求携带自定义token
    }
    return config
}, error => {
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => { 
        router.replace({
            path: "/"
        });
        // router.replace({
        //     path: "/500"
        // });
        // console.log('err' + error) // for debug
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 2 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service