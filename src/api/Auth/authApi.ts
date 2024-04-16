import axios, { AxiosResponse } from 'axios'
import { API_PATHS } from '@/constants.ts'
export interface ILoginResponse {
  id?: string
  userName?: string
  accessToken?: string
  refreshToken?: string
}

export const login = async (code?: string, social?: string) => {
  const { data } = await axios.get<AxiosResponse<ILoginResponse>>(API_PATHS.login, {
    params: { code, social },
  })
  return data
}

export const logout = async () => {
  await axios.post<AxiosResponse<ILoginResponse>>(API_PATHS.logout)
}
