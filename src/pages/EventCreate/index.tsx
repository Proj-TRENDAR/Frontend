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
import RecurringDetailInput from '@components/Event/RecurringDetailInput'
//0 = 일요일, 1 = 월요일, 2 = 화요일, 3 = 수요일, 4 = 목요일, 5 = 금요일, 6 = 토요일

export interface IRecurring {
  separationCount: number | null // 간격 주기 설정 ex) 이틀마다, 격주마다..
  maxNumOfOccurrances: number | null // 최대반복횟수 ex) n회
  dayOfWeek: number[] | null // 주간 특정 요일 설정
  dayOfMonth: number[] | null // 월간 특정 일 설정
  weekOfMonth: number | null // 월간 특정 주 설정
  recurringEndTime: Date | null // 반복종료시간 ex) 0000년 00월 00일까지
}
export interface IEvent extends IRecurring {
  title: string
  place: string
  memo: string
  isAllDay: boolean
  color: string
  startDate: Date | null
  endDate: Date | null

  isRecurring: boolean
  recurringType: string | null
}

export default function EventCreate() {
  const recurringInitial = {
    separationCount: null,
    maxNumOfOccurrances: null,
    dayOfWeek: null,
    dayOfMonth: null,
    weekOfMonth: null,
    recurringEndTime: null,
  }

  const initial: IEvent = {
    title: '',
    place: '',
    memo: '',
    isAllDay: false,
    color: '',
    startDate: null,
    endDate: null,

    isRecurring: false,
    recurringType: null,
    ...recurringInitial,
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
      label: '연간반복',
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
          showTimeSelect={!event.isAllDay}
        />
        <S.EndDateWrapper>
          <span>~ </span>
          <DatePickerInput
            value={event.endDate}
            setValue={(date: Date | null) => {
              setEvent({ ...event, endDate: date })
            }}
            showTimeSelect={!event.isAllDay}
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
            const isRecurring = recurringType !== null
            setEvent({ ...event, isRecurring: isRecurring, recurringType: recurringType })
          }}
        />
        {/* 반복 타입 지정시 반복상세 인풋 노출*/}
        {event.isRecurring && event.recurringType !== null && (
          <RecurringDetailInput event={event} setEvent={setEvent} recurringInitial={recurringInitial} />
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
