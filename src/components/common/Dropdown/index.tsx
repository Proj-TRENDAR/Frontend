import React, { useEffect, useState } from 'react'

import * as S from './style'
import useToggleOpenWithExternalClick from '@/Hooks/useToggleOpenWithExternalClick'
import Arrow from '@assets/image/icon/ic-arrow_down.svg?react'

export interface DropdownItems {
  id: string // id를 기준으로 현재 아이탬을 표시합니다
  title: string
  style?: React.CSSProperties
}

interface Props {
  items: DropdownItems[]
  currentItemId?: string
  placeholder: string
  children: React.ReactNode // DropdownItem 컴포넌트들을 자식으로 받습니다
  style?: React.CSSProperties
}

export default function Dropdown({ items, currentItemId = '', placeholder, children, ...props }: Props) {
  const [isOpenModal, setIsOpen, isExternalClickDetected] = useToggleOpenWithExternalClick()
  const [currentItemTitle, setCurrenItemTitle] = useState('')

  useEffect(() => {
    if (currentItemId !== '') {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === currentItemId) {
          setCurrenItemTitle(items[i].title)
          break
        }
      }
    }
  }, [currentItemId])
  return (
    <S.DropDownWrapper
      onClick={(e: { currentTarget: HTMLElement }) => {
        isExternalClickDetected(e.currentTarget)
      }}
      {...props}
    >
      <button
        className={isOpenModal ? '' : 'closed'}
        onClick={() => {
          setIsOpen(!isOpenModal)
        }}
      >
        <Arrow />
        {currentItemTitle !== '' ? currentItemTitle : placeholder}
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
  url?: () => void
}

interface ItemLinkProps extends ItemProps {
  url: string
  onClick?: () => void
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
