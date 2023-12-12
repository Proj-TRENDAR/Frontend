import React from 'react'

import * as S from './style'
import useToggleOpenWithExternalClick from '@/Hooks/useToggleOpenWithExternalClick'

interface Props {
  currentItemId?: string
  placeholder: string
  children: React.ReactNode // li 리스트를 전달받습니다
}

export default function Dropdown({ currentItemId = '', placeholder, children }: Props) {
  const [isOpenModal, setIsOpen, isExternalClickDetected] = useToggleOpenWithExternalClick()
  return (
    <S.DropDownWrapper
      onClick={(e: { currentTarget: HTMLElement }) => {
        isExternalClickDetected(e.currentTarget)
      }}
    >
      <button
        className={isOpenModal ? '' : 'closed'}
        onClick={() => {
          setIsOpen(!isOpenModal)
        }}
      >
        {currentItemId !== '' ? currentItemId : placeholder}
      </button>
      <ul className={isOpenModal ? '' : 'closed'}>{children}</ul>
    </S.DropDownWrapper>
  )
}

interface ItemProps {
  title: string
  disabled: boolean
}

interface ItemButtonProps extends ItemProps {
  onClick: () => void
  url?: undefined
}

interface ItemLinkProps extends ItemProps {
  url: string
  onClick?: undefined
}

export function DropdownItem({ title, onClick, url, disabled }: ItemButtonProps | ItemLinkProps) {
  return (
    <li>
      {onClick && (
        <S.ButtonItem onClick={onClick} disabled={disabled}>
          {title}
        </S.ButtonItem>
      )}
      {url && (
        <S.LinkItem to={url} $disabled={disabled}>
          {title}
        </S.LinkItem>
      )}
    </li>
  )
}
