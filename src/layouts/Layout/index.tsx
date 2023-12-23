import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

import Header from '@layouts/Header'
import Calendar from '@components/Calendar'
import AlertModal from '@components/common/modal/AlertModal'
import { useAlertModal } from '@/Hooks/useAlertModal'
import * as S from './style'

export default function HomeLayout() {
  const [setIsOpenComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] = useAlertModal({
    alertMessageKey: 'comingSoon',
  })

  return (
    <>
      <S.Layout>
        <Header
          handleOpenForComingSoonModal={() => {
            setIsOpenComingSoonModal(true)
          }}
        />
        <Calendar id="calendar" />
        <main id="right-bar">
          <Outlet />
        </main>
      </S.Layout>

      {/* TODO : footer는 개발 편의를 위한 것입니다. 작업 완료시 삭제 */}
      <footer>
        <ul>
          <li>
            사이트맵
            <ul>
              <li>
                <Link to="/login">로그인 페이지</Link>
              </li>
              <li>
                <Link to="/guide">안내 페이지</Link>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
      <AlertModal
        handleClose={() => {
          setIsOpenComingSoonModal(false)
        }}
        isOpenModal={isComingSoonModalOpen}
        message={messageOfComingSoonModal}
      />
    </>
  )
}
