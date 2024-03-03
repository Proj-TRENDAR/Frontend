import { useState, createContext, useContext, useEffect, Dispatch, SetStateAction } from 'react'
import { RuleSet } from 'styled-components'

import * as S from './style'
import Arrow from '@assets/image/icon/ic-arrow_down.svg?react'

interface Props {
  idList: Array<string>
  height: string
  children: React.ReactElement // AccordionItem들을 받아서 출력합니다
}

interface IsAllClosed {
  [id: string]: boolean
}
interface Context {
  isAllClosed: IsAllClosed
  setIsAllClosed: Dispatch<SetStateAction<IsAllClosed>>
}

const ItemClosedContext = createContext<Context>({
  isAllClosed: {},
  setIsAllClosed: () => {},
})
export default function Accordion({ idList, height, children }: Props) {
  const [isAllClosed, setIsAllClosed] = useState<IsAllClosed>({})

  useEffect(() => {
    const newIsAllClosed: IsAllClosed = {}
    idList.map((id: string) => {
      newIsAllClosed[id] = false
    })
    setIsAllClosed(newIsAllClosed)
  }, [])

  return (
    <ItemClosedContext.Provider value={{ isAllClosed, setIsAllClosed }}>
      <S.AccordionWrapper height={height}>{children}</S.AccordionWrapper>
    </ItemClosedContext.Provider>
  )
}

interface ItemProps {
  id: string
  header: React.ReactElement // 여닫는 버튼 옆에 출력됩니다
  children: React.ReactElement // 닫히는 영역에 출력됩니다
  moreStyle?: RuleSet<object>
  arrowColor?: string
}
export function AccordionItem({ id, header, children, moreStyle, arrowColor }: ItemProps) {
  const [isOpened, setIsOpened] = useState<boolean>(true)
  const { isAllClosed, setIsAllClosed } = useContext(ItemClosedContext)

  return (
    <S.AccordionItem $isOpened={isOpened} $moreStyle={moreStyle}>
      <S.ItemHeader className="item-header">
        <button
          className={`open-button ${isOpened ? '' : 'close'}`}
          onClick={() => {
            if (isOpened && Object.values(isAllClosed).reduce((a, v) => (!v ? ++a : a), 0) !== 1) {
              setIsOpened(false)
              setIsAllClosed({ ...isAllClosed, [id]: true })
            } else if (!isOpened) {
              setIsOpened(true)
              setIsAllClosed({ ...isAllClosed, [id]: false })
            }
          }}
        >
          {arrowColor ? <Arrow stroke={arrowColor} /> : <Arrow />}
        </button>
        <div className="header-wrapper">{header}</div>
      </S.ItemHeader>
      <S.ItemContent className="item-content" $isOpened={isOpened}>
        {children}
      </S.ItemContent>
    </S.AccordionItem>
  )
}
