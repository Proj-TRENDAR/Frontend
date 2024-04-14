import axios from 'axios'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'

import UserIcon from '@components/common/UserIcon'
import IconButton from '@components/common/button/IconButton'
import ButtonsModal from '@components/common/modal/ButtonsModal'
import * as S from './style'
import Dropdown, { DropdownItem, DropdownItems } from '@components/common/Dropdown'
import { userInfoAtom } from '@/store'

interface Props {
  handleOpenForComingSoonModal: () => void
}

interface Calendar extends DropdownItems {
  url: string
}

export default function Header({ handleOpenForComingSoonModal }: Props) {
  const navigate = useNavigate()
  const [calendar, setCalendar] = useState<Calendar[]>([])
  const [currentCalendar, setCurrentCalendar] = useState<string>('')
  const [, setUserInfo] = useAtom(userInfoAtom)
  const userImage = null // TODO : 유저 이미지 받아서 출력해야함. 임의로 null

  useEffect(() => {
    // TODO: 캘린더 공유 구현시, 캘린더 정보 받아와야함. 지금은 dummy 사용
    setCalendar(dummy)
    // TODO: 캘린더 공유 구현시, 현재 출력되는 캘린더와 일치하는 캘린더 id를 저장해야함. 지금은 '내 캘린더' 출력함(어떤 방식으로 구현할지 의논 필요)
    setCurrentCalendar(dummy[0].id)
  }, [])

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
          <button onClick={handleOpenForComingSoonModal}>프로필</button>
        </li>
        <li>
          {/* TODO: 캘린더 관리 페이지 생성시 Link로 수정하기 */}
          <button onClick={handleOpenForComingSoonModal}>캘린더 관리</button>
        </li>
        <li>
          <button
            className="red"
            onClick={() => {
              const config = {
                method: 'post',
                url: '/auth/logout',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
              axios(config)
                .then((res: any) => {
                  console.log(res)
                  setUserInfo({
                    accessToken: null,
                    userName: null,
                    id: null,
                  })
                  navigate('/login')
                })
                .catch((err: any) => {
                  console.log(err)
                  // TODO: 로그인 실패 모달 띄우기
                })
            }}
          >
            로그아웃
          </button>
        </li>
      </ButtonsModal>
      <Dropdown items={calendar} placeholder="캘린더 목록" currentItemId={currentCalendar}>
        {calendar.map(item => {
          if (item.url && item.url.length > 0) {
            return (
              <DropdownItem key={item.id} title={item.title} url={item.url} disabled={item.id === currentCalendar} />
            )
          } else {
            return (
              <DropdownItem
                key={item.id}
                title={item.title}
                onClick={handleOpenForComingSoonModal}
                disabled={item.id === currentCalendar}
              />
            )
          }
        })}
      </Dropdown>
    </S.Header>
  )
}

// TODO: 캘린더 공유 구현시, dummy 삭제
const dummy = [
  {
    id: 'calendar1',
    title: '내 캘린더',
    url: '/',
  },
  {
    id: 'calendar2',
    title: '모임 캘린더',
    url: '',
  },
  {
    id: 'calendar3',
    title: '친구 캘린더',
    url: '',
  },
]
