import React from 'react'

import ButtonInAlert from '@components/common/button/ButtonInAlert'
import * as S from './style'

interface Props {
  handleClose: () => void
  isOpenModal: boolean
  message: string | React.ReactElement
}

// useAlertModal 훅과 함께 사용합니다.
export default function AlertModal({ handleClose, isOpenModal, message }: Props) {
  return (
    <S.ModalWrapper className={isOpenModal ? 'opened' : ''}>
      <S.ModalDarkBox className="dark-box" onClick={handleClose} />
      <S.Modal className="white-box">
        <div>{message}</div>
        <ButtonInAlert type="cancel" text="닫기" size="large" onClick={handleClose} />
      </S.Modal>
    </S.ModalWrapper>
  )
}
