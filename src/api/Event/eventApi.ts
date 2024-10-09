import axios, { AxiosResponse } from 'axios'
import { IEvent, ITodoList } from '@/types'
import { API_PATHS } from '@/constants.ts'
import { ICreateEvent } from '@pages/EventCreate'
import dateFormat from '@/utils/dateFormat.ts'

export const getEventList = async (year: number, month: number): Promise<AxiosResponse<IEvent[][]>> => {
  return await axios.get(`${API_PATHS.event}?year=${year}&month=${month}`)
}

const handlePayload = (id: string, payload: ICreateEvent) => {
  // FIXME: 우선은 payload.startTime 또는 endTime이 없을리가 없어서
  //  !로 막아놨는데... 권장하지 않는 방법이라고 Forbidden non-null assertion 경고가 발생합니다.
  //  다른 방식으로 수정이 필요할것같습니다

  return {
    ...payload,
    userId: id,
    startTime: payload.isAllDay
      ? `${dateFormat(payload.startTime!, 'YYYY-MM-DD')} 00:00:00`
      : dateFormat(payload.startTime!, 'YYYY-MM-DD hh:mm:ss'),
    endTime: payload.isAllDay
      ? `${dateFormat(payload.endTime!, 'YYYY-MM-DD')} 00:00:00`
      : dateFormat(payload.endTime!, 'YYYY-MM-DD hh:mm:ss'),
    color: Number(payload.color.replace('s', '')),
    separationCount: payload.separationCount - 1, // 0일떄 매일/매주/매월/매년 반복이 됨
  }
}

export const createEvent = async (id: string, payload: ICreateEvent): Promise<AxiosResponse<ITodoList>> => {
  const filteredPayload = handlePayload(id, payload)
  return await axios.post(API_PATHS.event, filteredPayload)
}

export const updateEvent = async (id: string, payload: ICreateEvent): Promise<AxiosResponse<ITodoList>> => {
  const { userId, ...filteredPayload } = handlePayload(id, payload)
  return await axios.put(`${API_PATHS.event}/${id}`, filteredPayload)
}
