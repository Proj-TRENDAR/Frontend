import * as S from './style.ts'
import { useTheme } from 'styled-components'
interface Props {
  color: 'routine' | 'event'
  value: string
  setValue: (value: string) => void
}

export default function ColorRadioButton({ color, value, setValue }: Props) {
  const colorList = {
    routine: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7'],
    event: ['s1', 's2', 's3', 's4', 's5', 's6', 's7'],
  }

  return (
    <S.ColorRadioButtonWrapper>
      <label htmlFor="color">색상</label>
      {colorList[color].map(v => (
        <ColorRadioInput
          key={v}
          color={v}
          checked={v === value}
          onChange={() => {
            setValue(v)
          }}
        />
      ))}
    </S.ColorRadioButtonWrapper>
  )
}

interface ColorRadioInputProps {
  color: string
  checked: boolean
  onChange: () => void
}

function ColorRadioInput({ color, checked, onChange }: ColorRadioInputProps) {
  const theme = useTheme()
  return <S.ColorRadioButton color={theme[color]} type="radio" id={color} checked={checked} onChange={onChange} />
}
