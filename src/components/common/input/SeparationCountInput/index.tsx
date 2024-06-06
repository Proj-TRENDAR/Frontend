import * as S from './styles.ts'
import { useEffect } from 'react'

interface Props {
  recurringType: string
  value: number | null
  setValue: (value: number | null) => void
}

export default function SeparationCountInput({ recurringType, value, setValue }: Props) {
  const getSeparationText = (recurringType: string) => {
    switch (recurringType) {
      case 'D':
        return '일 마다'
      case 'W':
        return '주 마다'
      case 'M':
        return '월 마다'
      case 'Y':
        return '년 마다'
      default:
        return ''
    }
  }

  useEffect(() => {
    // 1로 초기화
    setValue(1)
  }, [])

  return (
    <S.Wrapper>
      <input
        className="separation"
        value={value ?? ''}
        onChange={e => {
          const newValue = e.target.value.replace(/[^0-9]/g, '')
          setValue(newValue === '' ? null : Number(newValue))
        }}
      />
      <span>{getSeparationText(recurringType)}</span>
    </S.Wrapper>
  )
}
