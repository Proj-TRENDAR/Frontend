import React from 'react'

import * as S from './style'

export interface Props {
  children: React.ReactNode
  size?: 'large' | 'medium' | 'small'
  $outline?: boolean
  $fullwidth?: boolean
  $round?: boolean
  color?: string
  [prop: string]: any
}

export default function Button({
  children,
  size = 'medium',
  outline = false,
  fullwidth = false,
  round = false,
  color,
  ...props
}: Props) {
  return (
    <S.Button $round={round} color={color} size={size} $outline={outline} $fullwidth={fullwidth} {...props}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  size: 'medium',
  outline: false,
  fullwidth: false,
  round: false,
}
