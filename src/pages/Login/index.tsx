import { Link } from 'react-router-dom'
import Logo from '@components/common/Logo'
import Title from '@components/common/Title'
import Button from '@/components/common/button'
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
              <Logo size={50} />
              <Title />
            </S.Logo>
          </S.LogoDiv>
        </S.LogoWrapper>
        <S.SocialLogin>
          <span>간편 로그인으로 빠르게 시작해보세요</span>
          <S.ButtonWrapper>image</S.ButtonWrapper>
        </S.SocialLogin>
      </S.Layout>
      <h1>로그인 페이지</h1>
      <Link to="/guide">트랜더 살펴보기</Link>
    </>
  )
}
