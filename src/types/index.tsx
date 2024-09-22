export interface IEvent {
  idx: string
  title: string
  isAllDay: boolean
  isRecurringData: boolean
  being: number | null
  startTime: string
  endTime: string
  originStartTime?: string
  originEndTime?: string
  color: number
  place: string
  description: string
}

export interface IRoutineList {
  title: string
  isDone: boolean
  sequence: number
  color: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6' | 'r7'
}

export interface ITodoList {
  idx: number
  title: string
  isDone: boolean
  sequence: number
  appliedAt: string
}
