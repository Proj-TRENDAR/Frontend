export interface IEvent {
  idx: string
  title: string
  isAllDay: boolean
  being: number | null
  startTime: string
  endTime: string
  color: number
  place: string
  description: string
}

export interface IRoutine {
  idx: number
  title: string
  color: number
  description: string | null
  weeklyCondition: number
  days: number[]
  startTime: string
  endTime: string | null
  completed: string[] | null
  sequence: number
  deletedAt: string | null // FIXME: 불필요 시 삭제
}

export interface ITodoList {
  idx: number
  title: string
  isDone: boolean
  sequence: number
  appliedAt: string
}
