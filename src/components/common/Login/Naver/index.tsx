import NaverLogo from '@/assets/image/naverLogo.svg?react'
import { useAlertModal } from '@/Hooks/useAlertModal'
import AlertModal from '@components/common/modal/AlertModal'

// TODO: 네이버 로그인 구현
// 구현예정이라 준비중 모달 띄움
export default function NaverLogin() {
  const [handleOpenForComingSoonModal, handleCloseForComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] =
    useAlertModal({
      alertMessageKey: 'comingSoon',
    })

  return (
    <>
      <NaverLogo style={{ cursor: 'pointer' }} onClick={handleOpenForComingSoonModal}></NaverLogo>
      <AlertModal
        handleClose={handleCloseForComingSoonModal}
        isOpenModal={isComingSoonModalOpen}
        message={messageOfComingSoonModal}
      />
    </>
  )
}
