import React from 'react'

import * as S from './style'
import useToggleOpenWithExternalClick from '@/Hooks/useToggleOpenWithExternalClick'

interface Props {
  button: React.ReactElement // 모달 토글 버튼 : button 엘리먼트만 받습니다
  children: React.ReactNode // 모달 목록 : children으로 li 앨리먼트들만 받습니다
}

export default function ButtonsModal({ button, children }: Props) {
  const [isOpenModal, setIsOpenModal, isExternalClickDetected] = useToggleOpenWithExternalClick()
  return (
    <S.ModalWrapper
      onClick={(e: { currentTarget: HTMLElement }) => {
        isExternalClickDetected(e.currentTarget)
      }}
    >
      {React.cloneElement(button, {
        onClick: () => {
          setIsOpenModal(!isOpenModal)
        },
      })}
      <S.Modal className={isOpenModal ? 'opened' : ''}>{children}</S.Modal>
    </S.ModalWrapper>
  )
}
