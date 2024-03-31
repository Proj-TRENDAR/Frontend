import React from 'react'

import * as S from './style'

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  [propsName: string]: any
}

export default function IconButton({ children, ...props }: Props) {
  return <S.Button {...props}>{children}</S.Button>
}
