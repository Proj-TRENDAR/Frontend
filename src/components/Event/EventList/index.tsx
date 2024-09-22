import { IEvent } from '@/types'
import * as S from './style.ts'
import { useTheme } from 'styled-components'
import dateFormat from '@/utils/dateFormat.ts'
import { useAtom } from 'jotai/index'
import { calendarInfoAtom } from '@/store'
import { useNavigate } from 'react-router'
import { eventInfoAtom } from '@/store/eventAtoms.ts'

interface Props {
  list: IEvent[]
}

export default function EventList({ list }: Props) {
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const navigate = useNavigate()
  const theme = useTheme()
  const [_eventAtom, setEventAtom] = useAtom(eventInfoAtom)

  const navigateDetailPage = (selectedEvent: IEvent) => {
    setEventAtom({ selectedEvent })
    navigate(`/event/${selectedEvent.idx}`)
  }

  return (
    <S.EventList>
      {list.map((event, index) => {
        const selectedDate = new Date(calendarInfo.selectedDate)
        return event.being !== null ? (
          <li key={`${index}-${event.idx}`} className={`long-event ${event.isAllDay ? '' : 'long-time'}`}>
            {event.isAllDay ? (
              <span className="time">하루</span>
            ) : (
              <span className="time">
                {new Date(event.startTime).getTime() >= selectedDate.getTime() &&
                  dateFormat(new Date(event.startTime), 'hh:mm')}{' '}
                ~{' '}
                {new Date(event.endTime).getTime() <= selectedDate.getTime() + 1000 * 60 * 60 * 24 &&
                  dateFormat(new Date(event.endTime), 'hh:mm')}
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
              {dateFormat(new Date(event.startTime), 'hh:mm')} ~ {dateFormat(new Date(event.endTime), 'hh:mm')}
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
