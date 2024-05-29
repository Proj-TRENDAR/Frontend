import * as S from './style.ts'

export interface Props {
  icon: React.ReactNode
  children: React.ReactNode
}

export default function IconInputWrapper({ icon, children }: Props) {
  return (
    <S.IconInputWrapper>
      <div className="icon-wrapper">{icon}</div>
      <div className="input-wrapper">{children}</div>
    </S.IconInputWrapper>
  )
}
