import * as S from './style'

interface Props {
  type: keyof typeof BUTTON_TYPE
  text?: string
  size?: keyof typeof S.sizes
  disabled?: boolean
  onClick: () => void
}

export const BUTTON_TYPE = {
  save: '저장',
  cancel: '취소',
  delete: '삭제',
  stop: '중지',
}

export default function ButtonInAlert({ type, text, size = 'small', disabled = false, onClick }: Props) {
  return (
    <S.Button className={type} onClick={onClick} $size={size} $type={type} disabled={disabled}>
      {text ? text : BUTTON_TYPE[type]}
    </S.Button>
  )
}
