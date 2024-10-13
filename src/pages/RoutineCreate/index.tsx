import { useEffect, useState } from 'react'

import * as S from './style.ts'
import PageLayout from '@layouts/Page'
import { useTheme } from 'styled-components'
import IconTextInput from '@components/common/input/IconTextInput'
import Title from '@assets/image/icon/event/ic-title.svg?react'
import Color from '@assets/image/icon/event/ic-color.svg?react'
import Memo from '@assets/image/icon/event/ic-memo.svg?react'
import { ICreateRoutine } from '@/types'
import ColorRadioButton from '@components/common/input/ColorRadioButton'
import IconTextArea from '@components/common/input/IconTextArea'

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
          icon={<Title fill={theme.basicBg} style={{ opacity: 0.6 }} />}
          value={routine.title}
          setValue={(title: string) => {
            setRoutine({ ...routine, title: title })
          }}
          placeholder="제목 입력"
        />
        <ColorRadioButton
          icon={<Color fill={theme.basicBg} style={{ opacity: 0.6 }} />}
          color="routine"
          value={`r${routine.color}`}
          setValue={(color: string) => {
            setRoutine({ ...routine, color: Number(color.replace('r', '')) }) // FIXME: 임시조치
          }}
        />
        <IconTextArea
          icon={<Memo fill={theme.basicBg} style={{ opacity: 0.6 }} />}
          id="memo"
          value={routine.description ?? ''}
          setValue={(description: string) => {
            setRoutine({ ...routine, description: description })
          }}
          placeholder="루틴 설명 또는 계획을 작성해보세요."
        />
      </S.RoutineCreateWrapper>
    </PageLayout>
  )
}
