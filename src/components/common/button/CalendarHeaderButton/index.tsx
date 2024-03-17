import * as S from './style'

import Arrow from '@assets/image/icon/ic-arrow_down.svg?react'

export interface Props {
  text: string
  handlePrev: () => void
  handleNext: () => void
  $fullwidth?: boolean
  size?: 'large' | 'medium'
  width?: number
}

export default function CalendarHeaderButton({
  text,
  handlePrev,
  handleNext,
  $fullwidth = false,
  size = 'medium',
  width,
}: Props) {
  return (
    <S.CalendarHeaderButton>
      <button className={'prev-button'} onClick={handlePrev}>
        <Arrow />
      </button>
      <S.CenterButton $fullwidth={$fullwidth} size={size} width={width}>
        {text}
      </S.CenterButton>
      <button className={'next-button'} onClick={handleNext}>
        <Arrow />
      </button>
    </S.CalendarHeaderButton>
  )
}
