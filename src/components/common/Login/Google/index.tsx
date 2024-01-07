import GoogleLogo from '@/assets/image/googleLogo.svg?react'
import { useAlertModal } from '@/Hooks/useAlertModal'
import AlertModal from '@components/common/modal/AlertModal'

// TODO: 구글 로그인 구현
// 구현예정이라 준비중 모달 띄움
export default function GoogleLogin() {
  const [handleOpenForComingSoonModal, handleCloseForComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] =
    useAlertModal({
      alertMessageKey: 'comingSoon',
    })

  return (
    <>
      <GoogleLogo style={{ cursor: 'pointer' }} onClick={handleOpenForComingSoonModal}></GoogleLogo>
      <AlertModal
        handleClose={handleCloseForComingSoonModal}
        isOpenModal={isComingSoonModalOpen}
        message={messageOfComingSoonModal}
      />
    </>
  )
}
