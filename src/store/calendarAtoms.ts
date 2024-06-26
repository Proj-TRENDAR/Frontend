import { useAtom } from 'jotai' // FIXME: 내부에서는 다르게 사용하는 방법이 있을꺼임.. 수정하기
import { atomWithStorage } from 'jotai/utils'

export const calendarInfoAtom = atomWithStorage<{ selectedDate: Date }>('calendarInfo', {
  selectedDate: new Date(),
})

export function getWeekDates(selectedDate: Date): Date[] {
  const dayOfWeek = selectedDate.getDay()
  const sunday = new Date(selectedDate)
  sunday.setDate(selectedDate.getDate() - dayOfWeek)
  const weekDates: Date[] = [new Date(sunday)]
  for (let i = 1; i < 7; i++) {
    const nextDay = new Date(sunday)
    nextDay.setDate(sunday.getDate() + i)
    weekDates.push(nextDay)
  }
  return weekDates
}

export function getSelectedWeekDates() {
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const selectedDate =
    calendarInfo.selectedDate instanceof Date ? calendarInfo.selectedDate : new Date(calendarInfo.selectedDate)
  return getWeekDates(selectedDate)
}
