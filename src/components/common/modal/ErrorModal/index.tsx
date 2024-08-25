import { useEffect } from 'react'
import { useAlertModal } from '@/Hooks/useAlertModal'
import AlertModal from '@components/common/modal/AlertModal'

interface ErrorAlertModalProps {
  errorMessage: string
  onClose: () => void
}

export default function ErrorAlertModal({ errorMessage, onClose }: ErrorAlertModalProps) {
  const [setIsOpenCustomMessage, isCustomModalOpen, messageOfCustomModal] = useAlertModal({
    message: (
      <>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}
        >
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
          <span>
            오류 발생!
            <br />
            {errorMessage ?? '잠시 후에 시도해주세요.'}
          </span>
        </div>
      </>
    ),
  })

  useEffect(() => {
    setIsOpenCustomMessage(true)
  }, [setIsOpenCustomMessage])

  return (
    <AlertModal
      handleClose={() => {
        setIsOpenCustomMessage(false)
        onClose()
      }}
      isOpenModal={isCustomModalOpen}
      message={messageOfCustomModal}
    />
  )
}
