import * as S from './style.ts'

import IconInputWrapper from '@components/common/input/IconInputWrapper'
import IconButton from '@components/common/button/IconButton'

import Add from '@assets/image/icon/ic-add.svg?react'
import Subtract from '@assets/image/icon/ic-subtract.svg?react'
import { useState } from 'react'
import { useTheme } from 'styled-components'

export default function CheckDaysOrFrequency({ icon }) {
  const theme = useTheme()
  const DAYS_Of_WEEK = ['일', '월', '화', '수', '목', '금', '토']
  const [weeklyFrequency, setWeeklyFrequency] = useState<number>(1)

  const handleDecrement = () => {
    if (weeklyFrequency > 1) {
      setWeeklyFrequency(weeklyFrequency - 1)
    }
  }

  const handleIncrement = () => {
    if (weeklyFrequency < 7) {
      setWeeklyFrequency(weeklyFrequency + 1)
    }
  }

  return (
    <IconInputWrapper icon={icon}>
      <S.CountWrapper>
        <IconButton
          onClick={e => {
            e.stopPropagation()
            handleDecrement()
          }}
          disabled={weeklyFrequency === 1}
        >
          <Subtract fill={weeklyFrequency === 1 ? theme.textLight : theme.point} />
        </IconButton>
        <span>주 {weeklyFrequency}회</span>
        <IconButton
          onClick={e => {
            e.stopPropagation()
            handleIncrement()
          }}
          disabled={weeklyFrequency === 7}
        >
          <Add fill={weeklyFrequency === 7 ? theme.textLight : theme.point} />
        </IconButton>
      </S.CountWrapper>
    </IconInputWrapper>
  )
}
