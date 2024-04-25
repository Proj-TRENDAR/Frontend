import axios, { AxiosResponse } from 'axios'
import { API_PATHS } from '@/constants.ts'
import { ITodoList } from '@/types'

export const getTodoList = async (): Promise<AxiosResponse<ITodoList[]>> => {
  return await axios.get(API_PATHS.todo)
}
export const createTodo = async (payload: object): Promise<AxiosResponse<ITodoList>> => {
  return await axios.post(API_PATHS.todo, payload)
}
export const updateTodo = async (todoData: ITodoList): Promise<AxiosResponse<ITodoList>> => {
  return await axios.put(`${API_PATHS.todo}/${todoData.idx}`, todoData)
}
export const deleteTodo = async (idx: number) => {
  return await axios.delete(`${API_PATHS.todo}/${idx}`)
}
