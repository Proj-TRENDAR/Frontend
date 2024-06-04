import React from 'react'

import * as S from './style'
import useToggleOpenWithExternalClick from '@/Hooks/useToggleOpenWithExternalClick'
import Arrow from '@assets/image/icon/ic-arrow_down.svg?react'

export interface ISelectItem {
  label: string
  value: string | null
}

interface SelectProps {
  items: ISelectItem[]
  value: string | null
  setValue: (value: string | null) => void
  placeholder?: string
  style?: React.CSSProperties
}

export default function Select({ items, value, setValue, placeholder, ...props }: SelectProps) {
  const [isOpenModal, setIsOpen, isExternalClickDetected] = useToggleOpenWithExternalClick()

  const getLabel = (value: string) => {
    for (const item of items) {
      if (item.value === value) {
        return item.label
      }
    }
  }

  return (
    <S.SelectWrapper
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
        {value ? getLabel(value) : '반복 없음'}
        <Arrow />
      </button>
      <ul className={isOpenModal ? '' : 'closed'}>
        {items.map(item => (
          <SelectItem
            key={item.value}
            isSelected={value === item.value}
            item={item}
            handleSelect={(value: string | null) => {
              setValue(value)
              setIsOpen(false)
            }}
          />
        ))}
      </ul>
    </S.SelectWrapper>
  )
}

interface ISelectItemProps {
  isSelected: boolean
  item: ISelectItem
  handleSelect: (value: string | null) => void
}

export function SelectItem({ isSelected, item, handleSelect }: ISelectItemProps) {
  return (
    <li>
      <S.ButtonItem
        className={isSelected ? 'current' : ''}
        onClick={() => {
          handleSelect(item.value)
        }}
      >
        {item.label}
      </S.ButtonItem>
    </li>
  )
}
