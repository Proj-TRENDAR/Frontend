import { Link } from 'react-router-dom'
import Button from '@/components/common/button'
import KakaoLogin from '@/components/common/Login/Kakao'
import TrendarLogo from '@/assets/image/trendarLogo.svg?react'
import TrendarTitle from '@/assets/image/trendarTitle.svg?react'

import * as S from './style'

export default function Login() {
  return (
    <>
      <S.Layout>
        <S.LogoWrapper>
          <S.LogoDiv>
            <span id="slogan">
              당신의 시간, 당신의 루틴. <br />
              <span id="slogan-bold">라이프 트렌드</span>를 그리는 곳
            </span>
            <S.Logo>
              <TrendarLogo />
              <TrendarTitle />
            </S.Logo>
            <Link to="/guide">
              <Button outline={true} fullwidth={true} id="round-button">
                트렌더 살펴보기
              </Button>
            </Link>
          </S.LogoDiv>
        </S.LogoWrapper>
        <S.SocialLogin>
          <span id="text">간편 로그인으로 빠르게 시작해보세요</span>
          <S.ButtonWrapper>
            <KakaoLogin />
          </S.ButtonWrapper>
        </S.SocialLogin>
      </S.Layout>
    </>
  )
}
