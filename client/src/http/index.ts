import axios, { AxiosInstance } from "axios";
 

const $host = axios.create({
    baseURL: process.env.SERVER_API_URL;
})