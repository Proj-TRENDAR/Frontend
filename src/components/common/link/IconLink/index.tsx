import React from 'react'

import * as S from './style'

interface Props {
  url: string
  children: React.ReactNode
  [prop: string]: any
}

export default function IconLink({ url, children, ...props }: Props) {
  return (
    <S.LinkButton to={url} {...props}>
      {children}
    </S.LinkButton>
  )
}
