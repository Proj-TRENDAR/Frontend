import { useEffect, useState } from 'react'
import * as S from './style.ts'
import IconInputWrapper from '@components/common/input/IconInputWrapper'
import DatePickerInput from '@components/common/input/DatePickerInput'
import IconButton from '@components/common/button/IconButton'
import Repeat from '@assets/image/icon/event/ic-repeat.svg?react'
import Add from '@assets/image/icon/ic-add.svg?react'
import Subtract from '@assets/image/icon/ic-subtract.svg?react'

interface Props {
  startDate: Date | null
  endDate: Date | null
  maxNumOfOccurrances: number | null
  recurringEndTime: Date | null
  setRecurringEndTime: (date: Date | null, maxNum: number | null) => void
}
export default function RecurringEndTime({
  startDate,
  endDate,
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
    setRecurringEndTime(new Date('2099-12-31'), null)
  }
  const handleMaxNum = () => {
    setActiveOption('max-num')
    setRecurringEndTime(null, selectMaxNum)
  }

  useEffect(() => {
    if (recurringEndTime === new Date('2099-12-31') || (recurringEndTime === null && maxNumOfOccurrances === null)) {
      // 초기화
      handleKeepRepeat()
      setSelectEndDate(endDate ?? startDate)
      setSelectMaxNum(2)
    } else if (recurringEndTime !== null) {
      setActiveOption('end-time')
      setSelectEndDate(recurringEndTime)
    } else if (maxNumOfOccurrances !== null) {
      setActiveOption('max-num')
      setSelectMaxNum(maxNumOfOccurrances)
    }
  }, [])

  useEffect(() => {
    if (activeOption !== 'end-time') {
      setSelectEndDate(endDate ?? startDate)
    }
  }, [startDate, endDate, activeOption])

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
              console.debug('b')
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
                  setRecurringEndTime(null, newSelectMaxNum)
                } else {
                  handleMaxNum()
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
                  setRecurringEndTime(null, newSelectMaxNum)
                } else {
                  handleMaxNum()
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
