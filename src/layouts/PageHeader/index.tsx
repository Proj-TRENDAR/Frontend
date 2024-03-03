import React from 'react'

import * as S from '@layouts/PageHeader/style'
import IconLink from '@components/common/link/IconLink'
import List from '@/assets/image/icon/ic-list.svg?react'

interface PageHeaderComponentProps {
  title: React.ReactElement
  button: React.ReactElement
}

interface InnerListTitleProps {
  title: string
  url: string
}

function PageHeaderComponent({ title, button }: PageHeaderComponentProps) {
  return (
    <S.PageHeader>
      <div className="title-wrapper">{title}</div>
      <div className="button-wrapper">{button}</div>
    </S.PageHeader>
  )
}

function InnerListTitle({ title, url }: InnerListTitleProps) {
  return (
    <>
      <IconLink url={url}>
        <List />
      </IconLink>
      <h1>{title}</h1>
    </>
  )
}

export const PageHeader = Object.assign(PageHeaderComponent, {
  InnerListTitle: InnerListTitle,
})
