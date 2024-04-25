import { useAlertModal } from '@/Hooks/useAlertModal'
import ButtonInAlert from '@components/common/button/ButtonInAlert'
import AlertModal from '@components/common/modal/AlertModal'

// 모달 출력 : 준비중
export default function GuideAlertModal() {
  const [setIsOpenForComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] = useAlertModal({
    alertMessageKey: 'comingSoon',
  })

  return (
    <>
      <ButtonInAlert
        type="cancel"
        text="준비중 모달 출력하기"
        size="large"
        onClick={() => {
          setIsOpenForComingSoonModal(true)
        }}
      />
      <AlertModal
        handleClose={() => {
          setIsOpenForComingSoonModal(false)
        }}
        isOpenModal={isComingSoonModalOpen}
        message={messageOfComingSoonModal}
      />
    </>
  )
}
