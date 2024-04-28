import Accordion from '@layouts/Accordion'
import Routine from '@pages/Home/Routine'
import Event from '@pages/Home/Event'
import ToDo from '@pages/Home/ToDo'

export default function Home() {
  const ID_LIST = {
    routine: 'routine',
    todo: 'to-do',
    event: 'event',
  }

  return (
    <>
      <Accordion idList={Object.values(ID_LIST)} height="calc(100vh - 64px)">
        <>
          <Routine id={ID_LIST.routine} />
          <ToDo id={ID_LIST.todo} />
          <Event id={ID_LIST.event} />
        </>
      </Accordion>
    </>
  )
}
