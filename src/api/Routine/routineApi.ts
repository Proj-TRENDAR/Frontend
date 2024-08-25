import axios, { AxiosResponse } from 'axios'
import { IRoutine } from '@/types'
import { API_PATHS } from '@/constants.ts'

export const getRoutineList = async (): Promise<AxiosResponse<IRoutine[]>> => {
  return await axios.get(API_PATHS.routine)
}
