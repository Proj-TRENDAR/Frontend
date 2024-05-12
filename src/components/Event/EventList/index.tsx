import { IEvent } from '@/types'
import * as S from './style.ts'
import { useTheme } from 'styled-components'
import dateFormat from '@/utils/dateFormat.ts'
import { useAtom } from 'jotai/index'
import { calendarInfoAtom } from '@/store'

interface Props {
  list: IEvent[]
}

export default function EventList({ list }: Props) {
  const [calendarInfo] = useAtom(calendarInfoAtom)

  const theme = useTheme()
  return (
    <S.EventList>
      {list.map(event => {
        const selectedDate = new Date(calendarInfo.selectedDate)
        return event.being !== null ? (
          <li key={event.idx} className={`long-event ${event.isAllDay ? '' : 'long-time'}`}>
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
                      border: `solid 2px ${theme.grayLine}`,
                    }),
              }}
            >
              {event.title}
            </button>
          </li>
        ) : (
          <li>
            <span className="time">
              {dateFormat(new Date(event.startTime), 'hh:mm')} ~ {dateFormat(new Date(event.endTime), 'hh:mm')}
            </span>
            <button>{event.title}</button>
          </li>
        )
      })}
    </S.EventList>
  )
}
