import { useEffect, useState } from 'react'
import * as S from './style.ts'
import IconInputWrapper from '@components/common/input/IconInputWrapper'
import DatePickerInput from '@components/common/input/DatePickerInput'
import IconButton from '@components/common/button/IconButton'
import Repeat from '@assets/image/icon/event/ic-repeat.svg?react'
import Add from '@assets/image/icon/ic-add.svg?react'
import Subtract from '@assets/image/icon/ic-subtract.svg?react'

interface Props {
  startTime: Date | null
  endTime: Date | null
  weekOfMonth: number | null
  separationCount: number | null
  recurringType: string | null
  maxNumOfOccurrances: number | null
  recurringEndTime: Date | null
  setRecurringEndTime: (date: Date | null, maxNum: number | null) => void
}

const initialMaxNum = 1

export default function RecurringEndTime({
  startTime,
  endTime,
  weekOfMonth,
  separationCount,
  recurringType,
  maxNumOfOccurrances,
  recurringEndTime,
  setRecurringEndTime,
}: Props) {
  const [activeOption, setActiveOption] = useState<'keep-repeat' | 'max-num' | 'end-time'>() // 현재 활성화된 옵션
  const [selectMaxNum, setSelectMaxNum] = useState<number>(initialMaxNum) // 옵션에서 표시할 MaxNum (ex. 1일때 2회반복임)
  const [selectEndDate, setSelectEndDate] = useState<Date | null>(null) // 옵션에서 표시할 endDate
  // 실제 저장할 데이터는 props에 있습니다.

  const handleKeepRepeat = () => {
    setActiveOption('keep-repeat')
  }
  const handleMaxNum = () => {
    setActiveOption('max-num')
  }
  const handleEndTime = () => {
    setActiveOption('end-time')
  }

  const calcEndDate = (newSelectMaxNum: number) => {
    if (recurringType === 'D') {
      const count = separationCount * newSelectMaxNum
      const newEndDate = new Date(startTime?.getFullYear(), startTime?.getMonth(), startTime?.getDate() + count)
      console.debug('날짜 계산 테스트')

      return newEndDate
    }
    if (recurringType === 'W') {
      const count = separationCount * 7 * newSelectMaxNum
      const fullWeekCountFromstartTimeDay = 7 - startTime?.getDay()
      // 일주일안에서 요일 선택이 가능하므로 해당 주 끝까지 날을 계산해주어야함
      const newEndDate = new Date(
        startTime?.getFullYear(),
        startTime?.getMonth(),
        startTime?.getDate() + count + fullWeekCountFromstartTimeDay
      )
      console.debug('날짜 계산 테스트(주간)')

      return newEndDate
    }
    if (recurringType === 'M') {
      if (weekOfMonth) {
        // n째주 특정요일 날짜를 계산해야함
        const count = separationCount * newSelectMaxNum
        const selectedDay = startTime?.getDay()
        const endMonthFirstDate = new Date(startTime?.getFullYear(), startTime?.getMonth() + count, 1)
        const endMonthFirstDay = endMonthFirstDate.getDay()

        const newEndDate = new Date(
          endMonthFirstDate.getFullYear(),
          endMonthFirstDate.getMonth(),
          endMonthFirstDate.getDate() +
            (endMonthFirstDay <= 3 ? weekOfMonth : weekOfMonth + 1) + // 수요일 기준으로 1주차로 시작 : 0주차로 시작
            (selectedDay < endMonthFirstDay ? -1 * (endMonthFirstDay - selectedDay) : selectedDay)
        )
        console.debug('날짜 계산 테스트(월간 n째주)')

        return newEndDate
      } else {
        // n달뒤 특정 날짜만 찾으면 됨
        const count = separationCount * newSelectMaxNum
        const newEndDate = new Date(startTime?.getFullYear(), startTime?.getMonth() + count, startTime?.getDate())
        console.debug('날짜 계산 테스트(월간 n달뒤)')

        return newEndDate
      }
    }
    if (recurringType === 'Y') {
      const count = separationCount * newSelectMaxNum
      const newEndDate = new Date(startTime?.getFullYear() + count, startTime?.getMonth(), startTime?.getDate())
      console.debug('날짜 계산 테스트(년간)')

      return newEndDate
    }
  }

  useEffect(() => {
    // FIXME: 생성시와 수정시에 초기화가 달라야함. 그 경우 처리가 제대로 되지 않아 이슈 있음.
    console.debug('바뀜')
    if (
      (recurringEndTime && new Date(recurringEndTime).getTime() === new Date('2099-12-31 23:59:59').getTime()) ||
      (recurringEndTime === null && maxNumOfOccurrances === null)
    ) {
      // 초기화
      console.debug('계속 반복', recurringEndTime, maxNumOfOccurrances)
      setActiveOption('keep-repeat')
      setSelectEndDate(endTime ?? startTime)
      setSelectMaxNum(initialMaxNum)
    } else if (recurringEndTime !== null) {
      console.debug('기간 정함', recurringEndTime, maxNumOfOccurrances)
      setActiveOption('end-time')
      setSelectEndDate(recurringEndTime)
      setSelectMaxNum(initialMaxNum)
    } else if (maxNumOfOccurrances !== null) {
      console.debug('횟수 정함', recurringEndTime, maxNumOfOccurrances)
      setActiveOption('max-num')
      setSelectEndDate(endTime ?? startTime)
      setSelectMaxNum(maxNumOfOccurrances)
    }
  }, [recurringType])

  useEffect(() => {
    if (selectMaxNum && activeOption === 'max-num') {
      setSelectEndDate(calcEndDate(selectMaxNum))
      setRecurringEndTime(calcEndDate(selectMaxNum), selectMaxNum)
    }
  }, [separationCount])

  return (
    <S.Wrapper>
      <IconInputWrapper icon={<Repeat />} $backgroundColor={'transparent'}>
        <div className="top-wrapper">
          <button
            className={`option keep-repeat ${activeOption === 'keep-repeat' ? 'current' : ''}`}
            onClick={() => {
              handleKeepRepeat()
            }}
          >
            계속 반복
          </button>
          <button
            className={`option max-num ${activeOption === 'max-num' ? 'current' : ''}`}
            onClick={() => {
              console.debug('b', selectMaxNum)
              setSelectEndDate(calcEndDate(selectMaxNum))
              setRecurringEndTime(calcEndDate(selectMaxNum), selectMaxNum)
              handleMaxNum()
            }}
          >
            <IconButton
              onClick={e => {
                e.stopPropagation()
                console.debug('b2')
                if (activeOption === 'max-num') {
                  const newSelectMaxNum = selectMaxNum - 1 < 1 ? 1 : selectMaxNum - 1
                  setSelectMaxNum(newSelectMaxNum)
                  setSelectEndDate(calcEndDate(newSelectMaxNum))
                  setRecurringEndTime(calcEndDate(newSelectMaxNum), newSelectMaxNum)
                }
              }}
            >
              <Subtract />
            </IconButton>
            <span>{selectMaxNum + 1}회</span>
            <IconButton
              onClick={e => {
                e.stopPropagation()
                console.debug('b3')

                if (activeOption === 'max-num') {
                  const newSelectMaxNum = selectMaxNum + 1
                  setSelectMaxNum(newSelectMaxNum)
                  setSelectEndDate(calcEndDate(newSelectMaxNum))
                  setRecurringEndTime(calcEndDate(newSelectMaxNum), newSelectMaxNum)
                }
              }}
            >
              <Add />
            </IconButton>
          </button>
        </div>
        <div className="bottom-wrapper">
          <button
            className={`option end-time ${activeOption === 'end-time' ? 'current' : ''}`}
            onClick={() => {
              if (maxNumOfOccurrances && selectEndDate) {
                setRecurringEndTime(selectEndDate, null)
              }
              handleEndTime()
            }}
          >
            <DatePickerInput
              value={selectEndDate}
              setValue={value => {
                setSelectEndDate(value)
                setRecurringEndTime(value, null)
              }}
              showTimeSelect={false}
            />
          </button>
        </div>
      </IconInputWrapper>
    </S.Wrapper>
  )
}
