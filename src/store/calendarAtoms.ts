import { atomWithStorage } from 'jotai/utils'

export const calendarInfoAtom = atomWithStorage<{ selectedDate: Date }>('calendarInfo', {
  selectedDate: new Date(),
})
