import axios, { AxiosResponse } from 'axios'
import { IEvent } from '@/types'
import { API_PATHS } from '@/constants.ts'

export const getEventList = async (year: number, month: number): Promise<AxiosResponse<IEvent[][]>> => {
  return await axios.get(`${API_PATHS.event}?year=${year}&month=${month}`)
}
