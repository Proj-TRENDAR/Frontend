import React from 'react'

import * as S from './style'

interface Props {
  children: React.ReactNode
  color?: string
  size?: string
  $outline?: boolean
  $fullwidth?: boolean
  [prop: string]: any
}

export default function Button({ children, color, size, outline, fullwidth, ...props }: Props) {
  return (
    <S.Button color={color} size={size} outline={outline} $fullwidth={fullwidth} {...props}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  size: 'medium',
  outline: false,
  fullwidth: false,
}
