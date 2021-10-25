import { $authHost, $noAuthHost } from './index'

export const registration = async (email: string, password: string) => {
    const response = await $noAuthHost.post('api/auth/registration')
}