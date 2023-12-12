import { useNavigate } from 'react-router'

import UserIcon from '@components/common/UserIcon'
import IconButton from '@components/common/button/IconButton'
import ButtonsModal from '@components/common/modal/ButtonsModal'
import * as S from './style'

interface Props {
  [key: string]: any
}

export default function Header({ ...props }: Props) {
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
        <li>
          {/* TODO: 프로필 페이지 생성시 Link로 수정하기 */}
          <button onClick={props.handleOpenForComingSoonModal}>프로필</button>
        </li>
        <li>
          {/* TODO: 캘린더 관리 페이지 생성시 Link로 수정하기 */}
          <button onClick={props.handleOpenForComingSoonModal}>캘린더 관리</button>
        </li>
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
