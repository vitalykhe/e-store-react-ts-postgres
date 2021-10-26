import { $authHost, $noAuthHost } from "./index";
import { AuthTokenBody , AuthResponseData} from '../utils/types'
import jwt_decode from 'jwt-decode';

export const registration = async (email: string, password: string) => {
  const response = await $noAuthHost.post("api/user/registration", {
    email,
    password,
    role: 'ADMIN',
  })
  const data = response.data as AuthResponseData
  const tokenBody: AuthTokenBody = jwt_decode(data.token)
  return tokenBody
};

export const login = async (email: string, password: string) => {
  const response = await $noAuthHost.post("api/user/login", {
    email,
    password,
  });
  const data = response.data as AuthResponseData
  const tokenBody: AuthTokenBody = jwt_decode(data.token)
  return tokenBody
};

export const check = async () => {
  const response = await $noAuthHost.post("api/auth/registration");
  return response
};
