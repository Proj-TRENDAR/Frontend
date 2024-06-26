import NaverLogo from '@/assets/image/naverLogo.svg?react'
import { useAlertModal } from '@/Hooks/useAlertModal'
import AlertModal from '@components/common/modal/AlertModal'

// TODO: 네이버 로그인 구현
// 구현예정이라 준비중 모달 띄움
export default function NaverLogin() {
  const [handleComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] = useAlertModal({
    alertMessageKey: 'comingSoon',
  })

  return (
    <>
      <NaverLogo
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleComingSoonModal(true)
        }}
      ></NaverLogo>
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
