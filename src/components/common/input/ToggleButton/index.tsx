import * as S from './style.ts'
interface Props {
  id: string
  label: string
  isChecked: boolean
  handleToggle: (isChecked: boolean) => void
}

export default function ToggleButton({ id, label, isChecked, handleToggle }: Props) {
  return (
    <S.ToggleButtonWrapper isChecked={isChecked}>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => {
          handleToggle(!isChecked)
        }}
      />
    </S.ToggleButtonWrapper>
  )
}
