import { AxiosRequestConfig, AxiosResponse } from "axios"

interface AxiosCustomResponse extends Omit<AxiosResponse, 'data'> {
    data: {
        message: string;
    }
}

export interface AxiosCustomError<T = unknown, D = any> extends Error {
    config: AxiosRequestConfig<D>;
    code?: string;
    request?: any;
    response?: AxiosCustomResponse;
    isAxiosError: boolean;
    toJSON: () => object;
  }

export type User = {
    id: number;
    name: string;
    email: string;
    role:string;
}

export interface AuthResponseData {
    token: string;
}

export interface AuthTokenBody extends User{
    "iat": number;
    "exp": number;
}

export type Device = {
    id: number
    name: string;
    img_url: string;
    price: number;
    description: string;
    rating: number;
}

export type Type = {
    id: number;
    name: string;
}

export type Brand = {
    id: number;
    name: string;
}
