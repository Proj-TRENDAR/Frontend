import { useEffect, useState } from 'react'

import * as S from './style.ts'
import PageLayout from '@layouts/Page'
import { useTheme } from 'styled-components'
import IconTextInput from '@components/common/input/IconTextInput'
import Title from '@assets/image/icon/event/ic-title.svg?react'
import Color from '@assets/image/icon/event/ic-color.svg?react'
import { ICreateRoutine } from '@/types'
import ColorRadioButton from '@components/common/input/ColorRadioButton'

export default function RoutineCreate() {
  const initial: ICreateRoutine = {
    title: '',
    description: '',
    color: 1,
    weeklyCondition: 0,
    days: [],
    startTime: '',
    endTime: null,
  }

  const [routine, setRoutine] = useState<ICreateRoutine>(initial)

  const theme = useTheme()
  return (
    <PageLayout title="루틴 추가" backgroundColor={theme.pointBg}>
      <S.RoutineCreateWrapper color={`r${routine.color}`}>
        <IconTextInput
          id="title"
          icon={<Title />}
          value={routine.title}
          setValue={(title: string) => {
            setRoutine({ ...routine, title: title })
          }}
          placeholder="제목 입력"
        />
        <ColorRadioButton
          icon={<Color />}
          color="routine"
          value={`r${routine.color}`}
          setValue={(color: string) => {
            setRoutine({ ...routine, color: Number(color.replace('r', '')) }) // FIXME: 임시조치
          }}
        />
      </S.RoutineCreateWrapper>
    </PageLayout>
  )
}
