import { Outlet } from 'react-router'

import * as S from './style'

export default function LoginLayout() {
  return (
    <>
      <S.Layout>
        <main>
          <Outlet />
        </main>
      </S.Layout>
    </>
  )
}
