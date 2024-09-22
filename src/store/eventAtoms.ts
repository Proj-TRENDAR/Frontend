import { atomWithStorage } from 'jotai/utils'
import { IEvent } from '@/types'

interface ISelectedEvent {
  selectedEvent: IEvent | null
}

export const eventInfoAtom = atomWithStorage<ISelectedEvent>('calendarInfo', {
  selectedEvent: null,
})
