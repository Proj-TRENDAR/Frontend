import * as S from './style.ts'
import IconInputWrapper from '@components/common/input/IconInputWrapper'

interface Props {
  icon: React.ReactNode
  id: string
  value: string
  setValue: (value: string) => void
  placeholder: string
  rows: number
}
export default function IconTextArea({ icon, id, value, setValue, placeholder, rows = 5 }: Props) {
  return (
    <IconInputWrapper icon={icon}>
      <S.TextArea
        id={id}
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
        placeholder={placeholder}
        rows={rows}
      />
    </IconInputWrapper>
  )
}
