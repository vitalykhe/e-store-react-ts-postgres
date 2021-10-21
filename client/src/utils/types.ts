export type User = {
    id: number;
    name: string;
    email: string;
    role:string;
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
