import * as S from './styles.ts'

interface Props {
  recurringType: string | null
  value: number | null
  setValue: (value: number | null) => void
}

export default function SeparationCountInput({ recurringType, value, setValue }: Props) {
  const getSeparationText = (recurringType: string | null) => {
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
