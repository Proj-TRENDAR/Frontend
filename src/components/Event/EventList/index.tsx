import { IEvent } from '@/types'
import * as S from './style.ts'
import { useTheme } from 'styled-components'
import dateFormat from '@/utils/dateFormat.ts'
import { useAtom } from 'jotai/index'
import { calendarInfoAtom } from '@/store'
import { useNavigate } from 'react-router'
import { eventInfoAtom } from '@/store/eventAtoms.ts'
import useNavigateEventDetailPage from '@/Hooks/useNavigateEventDetailPage.ts'

interface Props {
  list: IEvent[]
}

export default function EventList({ list }: Props) {
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const navigate = useNavigate()
  const theme = useTheme()
  const [_eventAtom, setEventAtom] = useAtom(eventInfoAtom)
  const [navigateDetailPage] = useNavigateEventDetailPage()

  return (
    <S.EventList>
      {list.map((event, index) => {
        const selectedDate = new Date(calendarInfo.selectedDate)

        // 반복일정이거나 장기 일정인 경우에 따라 알맞게 일정을 보여줘야함
        const thisEventStartTime =
          (event.isRecurringData ? event.recurringStartTime : event.originStartTime) ?? event.startTime
        const thisEventEndTime = (event.isRecurringData ? event.recurringEndTime : event.originEndTime) ?? event.endTime

        // console.debug('check', event, thisEventStartTime, thisEventEndTime)

        return event.being !== null ? (
          <li key={`${index}-${event.idx}`} className={`long-event ${event.isAllDay ? '' : 'long-time'}`}>
            {event.isAllDay ? (
              <span className="time">하루</span>
            ) : (
              <span className="time">
                {new Date(thisEventStartTime).getTime() >= selectedDate.getTime() &&
                  dateFormat(new Date(thisEventStartTime), 'hh:mm')}{' '}
                ~{' '}
                {new Date(thisEventEndTime).getTime() <= selectedDate.getTime() + 1000 * 60 * 60 * 24 &&
                  dateFormat(new Date(thisEventEndTime), 'hh:mm')}
              </span>
            )}
            <button
              style={{
                ...(event.isAllDay
                  ? {
                      backgroundColor: theme[`s${event.color}`],
                    }
                  : {
                      backgroundColor: 'unset',
                      border: `solid 2px ${theme[`s${event.color}`]}`,
                    }),
              }}
              onClick={() => {
                navigateDetailPage(event)
              }}
            >
              {event.title}
            </button>
          </li>
        ) : (
          <li key={`${index}-${event.idx}`}>
            <span className="time">
              {new Date(thisEventStartTime).getTime() >= selectedDate.getTime() &&
                dateFormat(new Date(thisEventStartTime), 'hh:mm')}{' '}
              ~{' '}
              {new Date(thisEventEndTime).getTime() <= selectedDate.getTime() + 1000 * 60 * 60 * 24 &&
                dateFormat(new Date(thisEventEndTime), 'hh:mm')}
            </span>
            <button
              onClick={() => {
                navigateDetailPage(event)
              }}
            >
              {event.title}
            </button>
          </li>
        )
      })}
    </S.EventList>
  )
}
