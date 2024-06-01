import * as S from './style.ts'

export interface Props {
  icon: React.ReactNode
  children: React.ReactNode
  $backgroundColor?: string
}

export default function IconInputWrapper({ icon, children, $backgroundColor = 'unset' }: Props) {
  return (
    <S.IconInputWrapper $backgroundColor={$backgroundColor}>
      <div className="icon-wrapper">{icon}</div>
      <div className="input-wrapper">{children}</div>
    </S.IconInputWrapper>
  )
}
