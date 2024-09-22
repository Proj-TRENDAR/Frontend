import { IEvent } from '@/types'
import { useNavigate } from 'react-router'
import { useAtom } from 'jotai/index'
import { eventInfoAtom } from '@/store/eventAtoms.ts'

export default function useNavigateEventDetailPage(): [(selectedEvent: IEvent) => void] {
  const navigate = useNavigate()
  const [_eventAtom, setEventAtom] = useAtom(eventInfoAtom)

  const naigateDetailPage = (selectedEvent: IEvent) => {
    setEventAtom({ selectedEvent })
    navigate(`/event/${selectedEvent.idx}`)
  }

  return [naigateDetailPage]
}
