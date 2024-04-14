import React from 'react'

import * as S from './style'

interface Props {
  onClick: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function IconButton({ onClick, children, ...props }: Props) {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  )
}
