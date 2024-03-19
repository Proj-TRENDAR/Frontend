import axios, { AxiosResponse } from 'axios'
import { API_PATHS } from '@/constants.ts'
import { ITodoList } from '@/types'

export const getTodoList = async () => {
  return await axios.get<AxiosResponse<ITodoList[]>>(API_PATHS.todo)
}
