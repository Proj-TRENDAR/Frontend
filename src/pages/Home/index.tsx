import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <ul>
        <li>
          Routine 컴포넌트
          <ul>
            <li>
              <Link to="routine-list">루틴 리스트 열기</Link>
            </li>
          </ul>
        </li>
        <li>Todo 컴포넌트</li>
        <li>일정 컴포넌트</li>
      </ul>
    </>
  )
}
