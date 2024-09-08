import { atom } from 'jotai'
import { IRoutine } from '@/types'

export const routineAtom = atom<IRoutine[] | []>([])
