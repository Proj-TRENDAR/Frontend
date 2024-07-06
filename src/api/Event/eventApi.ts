import axios, { AxiosResponse } from 'axios'
import { IEvent, ITodoList } from '@/types'
import { API_PATHS } from '@/constants.ts'
import { ICreateEvent } from '@pages/EventCreate'
import dateFormat from '@/utils/dateFormat.ts'

export const getEventList = async (year: number, month: number): Promise<AxiosResponse<IEvent[][]>> => {
  return await axios.get(`${API_PATHS.event}?year=${year}&month=${month}`)
}
export const createEvent = async (id: string, payload: ICreateEvent): Promise<AxiosResponse<ITodoList>> => {
  const filteredPayload = {
    userId: id,
    title: payload.title,
    isAllDay: payload.isAllDay,
    startTime: dateFormat(payload.startTime!, 'YYYY-MM-DD hh:mm:ss'),
    endTime: dateFormat(payload.endTime!, 'YYYY-MM-DD hh:mm:ss'),
    color: Number(payload.color.replace('s', '')),
    place: payload.place,
    description: payload.description,
    isRecurring: payload.isRecurring,
  }

  return await axios.post(API_PATHS.event, filteredPayload)
}
