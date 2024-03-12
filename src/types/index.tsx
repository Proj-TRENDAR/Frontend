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
