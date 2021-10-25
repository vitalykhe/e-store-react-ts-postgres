import { $authHost, $noAuthHost } from "./index";

interface AuthResponseData {
    token: string;
}
export const registration = async (email: string, password: string) => {
  
  const { data } = await $noAuthHost.post("api/user/registration", {
    email,
    password,
    role: 'ADMIN',
  });
  return data as AuthResponseData
};

export const login = async (email: string, password: string) => {
  const { data } = await $noAuthHost.post("api/user/login", {
    email,
    password,
  });
  return data as AuthResponseData
};

export const check = async () => {
  const response = await $noAuthHost.post("api/auth/registration");
  return response
};
