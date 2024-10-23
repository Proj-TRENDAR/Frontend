import React, { MouseEventHandler } from 'react'

import * as S from './style'

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  disabled: boolean
  style?: React.CSSProperties
  [propsName: string]: any
}

export default function IconButton({ onClick, children, disabled, ...props }: Props) {
  return (
    <S.Button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </S.Button>
  )
}
