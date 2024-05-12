import { IEvent } from '@/types'

interface Props {
  list: IEvent[]
}

export default function EventList({ list }: Props) {
  return (
    <ul>
      {list.map(event => {
        return <li key={event.idx}>{event.title}</li>
      })}
    </ul>
  )
}
