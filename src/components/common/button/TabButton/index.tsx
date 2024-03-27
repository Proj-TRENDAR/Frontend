import { useState } from 'react'

import * as S from './style'

export interface ITabList {
  key: string
  title: string
  onClick: () => void
}

export interface Props {
  tabList: ITabList[]
  defaultTabKey: string
  size?: 'large' | 'small'
  $fullwidth?: boolean
  [prop: string]: any
}

export default function TabButton({ tabList, defaultTabKey, size = 'large', fullwidth = false, ...props }: Props) {
  const [currentActive, setCurrentActive] = useState(defaultTabKey ? defaultTabKey : tabList[0].key)

  const handleClickedTab = (tab: ITabList, onClick: () => void) => {
    setCurrentActive(tab.key)
    onClick()
  }

  return (
    <S.TabWrapper>
      {tabList.map(tab => (
        <S.Tab
          key={tab.key}
          className={currentActive === tab.key ? 'active' : ''}
          size={size}
          $fullwidth={fullwidth}
          onClick={() => {
            handleClickedTab(tab, tab.onClick)
          }}
          {...props}
        >
          {tab.title}
        </S.Tab>
      ))}
    </S.TabWrapper>
  )
}
