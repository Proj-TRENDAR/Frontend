import Accordion from '@layouts/Accordion'
import Routine from '@pages/Home/Routine'
import Schedule from '@pages/Home/Schedule'
import ToDo from '@pages/Home/ToDo'

export default function Home() {
  const ID_LIST = {
    routine: 'routine',
    todo: 'to-do',
    schedule: 'schedule',
  }

  return (
    <>
      <Accordion idList={Object.values(ID_LIST)} height="calc(100vh - 64px)">
        <>
          <Routine id={ID_LIST.routine} />
          <ToDo id={ID_LIST.todo} />
          <Schedule id={ID_LIST.schedule} />
        </>
      </Accordion>
    </>
  )
}
