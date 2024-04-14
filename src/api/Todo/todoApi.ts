import axios, { AxiosResponse } from 'axios'
import { API_PATHS } from '@/constants.ts'
import { ITodoList } from '@/types'

export const getTodoList = async () => {
  return await axios.get<AxiosResponse<ITodoList[]>>(API_PATHS.todo)
}
export const createTodo = async (payload: object) => {
  return await axios.post<AxiosResponse<ITodoList>>(API_PATHS.todo, payload)
}
export const updateTodo = async (todoData: ITodoList) => {
  return await axios.put<AxiosResponse<ITodoList>>(`${API_PATHS.todo}/${todoData.idx}`, todoData)
}
export const deleteTodo = async (idx: number) => {
  return await axios.delete(`${API_PATHS.todo}/${idx}`)
}
