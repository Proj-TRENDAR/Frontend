import { Link } from 'react-router-dom'

export default function TodoList() {
  return (
    <>
      <h1>To Do 목록</h1>
      <ul>
        <li>
          <Link to="/">To Do 목록 닫기</Link>
        </li>
      </ul>
    </>
  )
}
