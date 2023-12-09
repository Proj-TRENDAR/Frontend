import { useNavigate } from 'react-router'

import UserIcon from '@components/common/UserIcon'
import IconButton from '@components/common/button/IconButton'
import ButtonsModal from '@components/common/ButtonsModal'
import * as S from './style'

export default function Header() {
  const navigate = useNavigate()
  let userImage = null // TODO : 유저 이미지 받아서 출력해야함. 임의로 null

  return (
    <S.Header>
      <ButtonsModal
        button={
          <IconButton style={{ height: '32px', width: '32px' }}>
            {userImage ? <img src={userImage} alt="유저 썸네일" /> : <UserIcon />}
          </IconButton>
        }
      >
        {/* TODO : 페이지 생성 시 아래 링크 추가하기 */}
        {/* <li>
          <Link to="/">프로필</Link>
        </li>
        <li>
          <Link to="/">캘린더 관리</Link>
        </li> */}
        <li>
          <button
            className="red"
            onClick={() => {
              // TODO : 로그아웃 구현
              navigate('/login')
            }}
          >
            로그아웃
          </button>
        </li>
      </ButtonsModal>
      캘린더 목록
    </S.Header>
  )
}
