import axios, { AxiosResponse } from 'axios'
import { IRoutine } from '@/types'
import { API_PATHS } from '@/constants.ts'

export const getRoutineList = async (): Promise<AxiosResponse<IRoutine[]>> => {
  return await axios.get(API_PATHS.routine)
}

export const postRoutineCompleted = async (routineIdx: number, completedAt: string) => {
  return await axios.post(`${API_PATHS.routine}/completed`, {
    routineIdx,
    completedAt,
  })
}

export const deleteRoutineCompleted = async (routineIdx: number, date: string) => {
  return await axios.delete(`${API_PATHS.routine}/completed`, { data: { routineIdx, date } })
}
