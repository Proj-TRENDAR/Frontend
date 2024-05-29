import { PageHeader } from '@layouts/PageHeader'
import IconButton from '@components/common/button/IconButton'
import * as S from '@layouts/Page/style.ts'
import { useNavigate } from 'react-router'
import X from '@/assets/image/icon/ic-x.svg?react'

interface Props {
  title: string
  backgroundColor: string
  children: React.ReactNode
}

export default function PageLayout({ title, backgroundColor, children }: Props) {
  const navigate = useNavigate()
  return (
    // 아래 style에서 height계산 중 '64px'은 유저 Header height임
    <section style={{ backgroundColor: backgroundColor, height: 'calc(100vh - 64px)' }}>
      <S.PageHeaderWrapper>
        <PageHeader
          title={
            <h1 className="section-title" style={{ paddingLeft: '30px', fontWeight: '400' }}>
              {title}
            </h1>
          }
          button={
            <IconButton
              onClick={() => {
                navigate(-1)
              }}
            >
              <X />
            </IconButton>
          }
        />
      </S.PageHeaderWrapper>
      <S.PageContentWrapper>{children}</S.PageContentWrapper>
    </section>
  )
}
