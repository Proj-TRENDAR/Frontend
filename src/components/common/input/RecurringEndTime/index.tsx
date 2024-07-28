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
  separationCount: number | null
  recurringType: string | null
  maxNumOfOccurrances: number | null
  recurringEndTime: Date | null
  setRecurringEndTime: (date: Date | null, maxNum: number | null) => void
}
export default function RecurringEndTime({
  startTime,
  endTime,
  separationCount,
  recurringType,
  maxNumOfOccurrances,
  recurringEndTime,
  setRecurringEndTime,
}: Props) {
  const [activeOption, setActiveOption] = useState<'keep-repeat' | 'max-num' | 'end-time'>() // 현재 활성화된 옵션
  const [selectMaxNum, setSelectMaxNum] = useState<number>(2) // 옵션에서 표시할 MaxNum
  const [selectEndDate, setSelectEndDate] = useState<Date | null>(null) // 옵션에서 표시할 endDate
  // 실제 저장할 데이터는 props에 있습니다.

  const handleKeepRepeat = () => {
    setActiveOption('keep-repeat')
  }
  const handleMaxNum = () => {
    setActiveOption('max-num')
  }
  const calcEndDate = (newSelectMaxNum: number) => {
    const date = startTime
    if (recurringType === 'D') {
      const count = separationCount * newSelectMaxNum
      const newEndDate = new Date(startTime?.getFullYear(), startTime?.getMonth(), startTime?.getDate() + count)
      console.debug('날짜 계산 테스트', separationCount, newSelectMaxNum, count)

      return newEndDate
    }
    if (recurringType === 'W') {
      return date
    }
    if (recurringType === 'M') {
      return date
    }
    if (recurringType === 'Y') {
      return date
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
      setSelectMaxNum(2)
    } else if (recurringEndTime !== null) {
      console.debug('기간 정함', recurringEndTime, maxNumOfOccurrances)
      setActiveOption('end-time')
      setSelectEndDate(recurringEndTime)
      setSelectMaxNum(2)
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
            <span>{selectMaxNum}회</span>
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
              setActiveOption('end-time')
            }}
          >
            <DatePickerInput
              value={selectEndDate}
              setValue={value => {
                setSelectEndDate(value)
              }}
              showTimeSelect={false}
            />
          </button>
        </div>
      </IconInputWrapper>
    </S.Wrapper>
  )
}
