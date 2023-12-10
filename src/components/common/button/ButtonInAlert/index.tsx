import * as S from './style'

interface Props {
  type: keyof typeof BUTTON_TYPE
  text?: string
  size?: keyof typeof S.sizes
  onClick: () => void
}

export const BUTTON_TYPE = {
  save: '저장',
  cancel: '취소',
  delete: '삭제',
}

export default function ButtonInAlert({ type, text, size = 'small', onClick }: Props) {
  return (
    <S.Button className={type} onClick={onClick} $size={size} $type={type}>
      {text ? text : BUTTON_TYPE[type]}
    </S.Button>
  )
}
