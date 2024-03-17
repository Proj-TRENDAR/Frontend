import * as S from './style'

import Arrow from '@assets/image/icon/ic-arrow_down.svg?react'
import Button from '@components/common/button/Button'

interface Props {
  text?: string
  /*FIXME: 필요 항목 수정*/
}

export default function CalendarHeaderButton({ text }: Props) {
  return (
    <S.CalendarHeaderButton>
      <button className={'prev-button'}>
        <Arrow />
      </button>
      <Button size={'small'} $outline={true} $round={true} $fullwidth={true}>
        {text}
      </Button>
      <button className={'next-button'}>
        <Arrow />
      </button>
    </S.CalendarHeaderButton>
  )
}
