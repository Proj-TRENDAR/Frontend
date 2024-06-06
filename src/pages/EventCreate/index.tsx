import PageLayout from '@layouts/Page'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import Title from '@assets/image/icon/event/ic-title.svg?react'
import Place from '@assets/image/icon/event/ic-place.svg?react'
import Memo from '@assets/image/icon/event/ic-memo.svg?react'
import Clock from '@assets/image/icon/event/ic-clock.svg?react'
import IconTextInput from '@components/common/input/IconTextInput'
import IconTextArea from '@components/common/input/IconTextArea'
import IconInputWrapper from '@components/common/input/IconInputWrapper'
import ToggleButton from '@components/common/input/ToggleButton'
import ColorRadioButton from '@components/common/input/ColorRadioButton'
import DatePickerInput from '@components/common/input/DatePickerInput'
import * as S from './style.ts'
import Select from '@components/common/input/Select'
import SeparationCountInput from '@components/common/input/SeparationCountInput'

interface IEvent {
  title: string
  place: string
  memo: string
  isAllDay: boolean
  color: string
  startDate: Date | null
  endDate: Date | null
  recurringType: string | null
  separationCount: number | null
}

export default function EventCreate() {
  const initial: IEvent = {
    title: '',
    place: '',
    memo: '',
    isAllDay: false,
    color: '',
    startDate: null,
    endDate: null,
    recurringType: null,
    separationCount: null,
  }
  const recurringTypeItems = [
    {
      label: '반복 없음',
      value: null,
    },
    {
      label: '일간반복',
      value: 'D',
    },
    {
      label: '주간반복',
      value: 'W',
    },
    {
      label: '월간반복',
      value: 'M',
    },
    {
      label: '년간반복',
      value: 'Y',
    },
  ]
  const [event, setEvent] = useState<IEvent>(initial)
  const theme = useTheme()
  return (
    <PageLayout title="일정 추가" backgroundColor={theme.pointBg}>
      <IconTextInput
        id="title"
        icon={<Title />}
        value={event.title}
        setValue={(title: string) => {
          setEvent({ ...event, title: title })
        }}
        placeholder="제목 입력"
      />
      <IconInputWrapper icon={<Clock />} $backgroundColor="#fff">
        <ToggleButton
          id="isAllDay"
          label="하루 종일"
          isChecked={event.isAllDay}
          handleToggle={(isAllDay: boolean) => {
            setEvent({ ...event, isAllDay: isAllDay })
          }}
        />
        {/* TODO: 선택된 날짜에 현재 시간 가져와야함 */}
        <DatePickerInput
          value={event.startDate}
          setValue={(date: Date | null) => {
            setEvent({ ...event, startDate: date })
          }}
        />
        <S.EndDateWrapper>
          <span>~ </span>
          <DatePickerInput
            value={event.endDate}
            setValue={(date: Date | null) => {
              setEvent({ ...event, endDate: date })
            }}
          />
        </S.EndDateWrapper>
        <ColorRadioButton
          color="event"
          value={event.color}
          setValue={(color: string) => {
            setEvent({ ...event, color: color })
          }}
        />
        <Select
          items={recurringTypeItems}
          value={event.recurringType}
          setValue={recurringType => {
            setEvent({ ...event, recurringType: recurringType })
          }}
        />
        {event.recurringType !== null && (
          <SeparationCountInput
            recurringType={event.recurringType}
            value={event.separationCount}
            setValue={(separationCount: number | null) => {
              setEvent({ ...event, separationCount: separationCount })
            }}
          />
          // TODO: 반복 컴포넌트 추가
        )}
      </IconInputWrapper>
      <IconTextInput
        id="title"
        icon={<Place />}
        value={event.place}
        setValue={(place: string) => {
          setEvent({ ...event, place: place })
        }}
        placeholder="장소 입력"
      />
      <IconTextArea
        icon={<Memo />}
        id="memo"
        value={event.memo}
        setValue={(memo: string) => {
          setEvent({ ...event, memo: memo })
        }}
        placeholder="메모 입력"
      />
    </PageLayout>
  )
}
