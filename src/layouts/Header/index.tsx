import UserIcon from '@components/common/UserIcon'
import IconButton from '@components/common/button/IconButton'
import * as S from './style'

export default function Header() {
  let userImage = null // TODO : 유저 이미지 받아서 출력해야함. 임의로 null
  return (
    <S.Header>
      <IconButton style={{ height: '32px', width: '32px' }}>
        {userImage ? <img src={userImage} alt="유저 썸네일" /> : <UserIcon />}
      </IconButton>
      캘린더 목록
    </S.Header>
  )
}
