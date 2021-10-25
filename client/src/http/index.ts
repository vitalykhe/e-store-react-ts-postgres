import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

//to api that don't require auth
const $noAuthHost = axios.create({
    baseURL: process.env.SERVER_API_URL
})

//to api that require auth
const $authHost = axios.create({
    baseURL: process.env.SERVER_API_URL 
})


//eslint
const authInterceptor = (config: AxiosRequestConfig) => {
    if (config && config.headers)
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}


$authHost.interceptors.request.use(authInterceptor)

 export {
     $noAuthHost,
     $authHost
 }