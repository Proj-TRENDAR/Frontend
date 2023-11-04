import { Link } from 'react-router-dom'

export default function RoutineList() {
  return (
    <>
      <h1>루틴 목록</h1>
      <ul>
        <li>
          <Link to="/">루틴 목록 닫기</Link>
        </li>
      </ul>
    </>
  )
}
