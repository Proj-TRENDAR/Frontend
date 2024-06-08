import React, { MouseEventHandler } from 'react'

import * as S from './style'

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  style?: React.CSSProperties
  [propsName: string]: any
}

export default function IconButton({ onClick, children, ...props }: Props) {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  )
}
