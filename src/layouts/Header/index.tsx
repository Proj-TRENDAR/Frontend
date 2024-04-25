import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'

import UserIcon from '@components/common/UserIcon'
import IconButton from '@components/common/button/IconButton'
import ButtonsModal from '@components/common/modal/ButtonsModal'
import * as S from './style'
import Dropdown, { DropdownItem, DropdownItems } from '@components/common/Dropdown'
import { userInfoAtom } from '@/store'
import { logout } from '@/api/Auth/authApi.ts'
import { useAlertModal } from '@/Hooks/useAlertModal.ts'
import AlertModal from '@components/common/modal/AlertModal'

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
  const [setIsOpenModal, isOpenModal, modalMessage] = useAlertModal({
    message: (
      <>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}
        >
          <>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="warning"
              width="40px"
              height="40px"
              fill="#f5661b"
              aria-hidden="true"
            >
              <path d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path>
            </svg>
            <span>로그아웃 중 오류가 발생했습니다.</span>
          </>
        </div>
      </>
    ),
  })

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
            onClick={async () => {
              await logout()
                .then((res: any) => {
                  console.debug(res)
                  setUserInfo({
                    accessToken: null,
                    userName: null,
                    id: null,
                  })
                  navigate('/login')
                })
                .catch((err: any) => {
                  console.debug('로그아웃 실패', err)
                  setIsOpenModal(true)
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
      <AlertModal
        handleClose={() => {
          setIsOpenModal(false)
        }}
        isOpenModal={isOpenModal}
        message={modalMessage}
      />
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
