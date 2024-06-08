import * as S from './style.ts'
import IconInputWrapper from '@components/common/input/IconInputWrapper'

interface Props {
  icon: React.ReactNode
  id: string
  value: string
  setValue: (value: string) => void
  placeholder: string
}
export default function IconTextInput({ icon, id, value, setValue, placeholder }: Props) {
  return (
    <IconInputWrapper icon={icon}>
      <S.TextInput
        id={id}
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
        placeholder={placeholder}
      />
    </IconInputWrapper>
  )
}