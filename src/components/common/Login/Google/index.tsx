import GoogleLogo from '@/assets/image/googleLogo.svg?react'
import { useAlertModal } from '@/Hooks/useAlertModal'
import AlertModal from '@components/common/modal/AlertModal'

// TODO: 구글 로그인 구현
// 구현예정이라 준비중 모달 띄움
export default function GoogleLogin() {
  const [handleComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] = useAlertModal({
    alertMessageKey: 'comingSoon',
  })

  return (
    <>
      <GoogleLogo
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleComingSoonModal(true)
        }}
      ></GoogleLogo>
      <AlertModal
        handleClose={() => {
          handleComingSoonModal(false)
        }}
        isOpenModal={isComingSoonModalOpen}
        message={messageOfComingSoonModal}
      />
    </>
  )
}
