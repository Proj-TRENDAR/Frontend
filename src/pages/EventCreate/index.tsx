import PageLayout from '@layouts/Page'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
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
import { useAtom } from 'jotai/index'
import { calendarInfoAtom, userInfoAtom } from '@/store'
import Button from '@components/common/button/Button'
import { createEvent, getEventList } from '@/api/Event/eventApi.ts'
import { useNavigate } from 'react-router'
//0 = 일요일, 1 = 월요일, 2 = 화요일, 3 = 수요일, 4 = 목요일, 5 = 금요일, 6 = 토요일

export interface IRecurring {
  separationCount: number | null // 간격 주기 설정 ex) 이틀마다, 격주마다..
  maxNumOfOccurrances: number | null // 최대반복횟수 ex) n회
  dayOfWeek: number[] | null // 주간 특정 요일 설정
  dateOfMonth: number[] | null // 월간 특정 일 설정
  weekOfMonth: number | null // 월간 특정 주 설정
  monthOfYear: number[] | null // 년간 특정 월 설정
  recurringEndTime: Date | null // 반복종료시간 ex) 0000년 00월 00일까지
}
export interface ICreateEvent extends IRecurring {
  title: string
  place: string
  description: string
  isAllDay: boolean
  color: string
  startTime: Date | null
  endTime: Date | null

  isRecurring: boolean
  recurringType: string | null
}

export default function EventCreate() {
  const [userInfo] = useAtom(userInfoAtom)
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)
  const navigate = useNavigate()

  const recurringInitial: IRecurring = {
    separationCount: null,
    maxNumOfOccurrances: null,
    dayOfWeek: null,
    dateOfMonth: null,
    weekOfMonth: null,
    monthOfYear: null,
    recurringEndTime: null,
  }

  const initial: ICreateEvent = {
    title: '',
    place: '',
    description: '',
    isAllDay: false,
    color: 's1',
    startTime: calendarInfo.selectedDate ?? null,
    endTime: null,

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

  const [event, setEvent] = useState<ICreateEvent>(initial)
  const theme = useTheme()

  useEffect(() => {
    if (event.startTime === null) {
      // 시작시간이 없다면 === 선택된 시간이 없다면
      // 시작시간 = 현재시간
      // 종료시간 = 시작시간 + 1시간
      const currentTime: Date = new Date()
      const oneHourLater: Date = new Date()
      oneHourLater.setHours(oneHourLater.getHours() + 1)
      setEvent({ ...event, startTime: currentTime, endTime: oneHourLater })
    } else {
      // 시작시간이 있다면 (초기화 된 상태: 시작시간 = 선택된 시간)
      // 종료시간 = 시작시간 + 1시간
      const oneHourLater: Date = new Date(event.startTime)
      oneHourLater.setHours(oneHourLater.getHours() + 1)
      setEvent({ ...event, endTime: oneHourLater })
    }
  }, [])

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
      <IconInputWrapper icon={<Clock />} $backgroundColor={theme.basicBg}>
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
          value={event.startTime}
          setValue={(date: Date | null) => {
            if (date && date.getTime() > event.endTime?.getTime()) {
              // 시작시간이 종료시간보다 미래라면
              // 종료시간 = 시작시간 + 1시간
              const oneHourLater: Date = new Date(date)
              oneHourLater.setHours(oneHourLater.getHours() + 1)
              setEvent({ ...event, startTime: date, endTime: oneHourLater })
            } else {
              setEvent({ ...event, startTime: date })
            }
          }}
          showTimeSelect={!event.isAllDay}
        />
        <S.EndTimeWrapper>
          <span>~ </span>
          <DatePickerInput
            value={event.endTime}
            setValue={(date: Date | null) => {
              if (date && date.getTime() < event.startTime?.getTime()) {
                // 종료시간이 시작시간보다 과거라면
                // 시작시간 = 종료시간 - 1시간
                const oneHourBefore: Date = new Date(date)
                oneHourBefore.setHours(oneHourBefore.getHours() - 1)
                setEvent({ ...event, startTime: oneHourBefore, endTime: date })
              } else {
                setEvent({ ...event, endTime: date })
              }
            }}
            showTimeSelect={!event.isAllDay}
          />
        </S.EndTimeWrapper>
        <ColorRadioButton
          color="event"
          value={event.color}
          setValue={(color: string) => {
            setEvent({ ...event, color: color })
          }}
        />

        {/* 반복 타입 셀렉트 */}
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
        value={event.description}
        setValue={(description: string) => {
          setEvent({ ...event, description: description })
        }}
        placeholder="메모 입력"
      />
      <S.ButtonWrapper>
        <Button
          size="medium"
          onClick={async () => {
            if (userInfo.id) {
              if (event) {
                // TODO: valid 필요
                console.debug(event)
                const result = await createEvent(userInfo.id, event)
                if (result.status === 201) {
                  // 일정추가 닫기
                  navigate('/')
                  // 일정 목록 가져오기
                  const selectedDate = calendarInfo.selectedDate
                  getEventList(selectedDate.getFullYear(), selectedDate.getMonth() + 1).then(res => {
                    if (calendarInfo.selectedDate) {
                      setCalendarInfo({ ...calendarInfo, selectedMonthInfo: res.data })
                    } else {
                      setCalendarInfo({ selectedDate: selectedDate, selectedMonthInfo: res.data })
                    }
                  })
                } else {
                  //  TODO: 실패 알림 필요
                }
              }
            } else {
              navigate('/login')
            }
          }}
        >
          저장
        </Button>
      </S.ButtonWrapper>
    </PageLayout>
  )
}
