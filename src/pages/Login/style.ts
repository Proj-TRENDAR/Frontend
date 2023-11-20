import { styled } from 'styled-components'

export const Layout = styled.div`
  width: 20rem;
  gap: 64px;
  border: 1px solid;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`
export const LogoWrapper = styled.div`
  display: flex;
  width: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`
export const LogoDiv = styled.div`
  gap: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #slogan {
    color: var(--text, #333);
    text-align: center;
    font-family: NanumBarunGothic;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 32.4px */
  }
  #slogan-bold {
    color: var(--text, #333);
    font-family: NanumBarunGothic;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 180%;
  }
`

export const SocialLogin = styled.div`
  padding: 36px 0px;
  gap: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-top: 1px solid var(--grayLine, #ededed);
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`
// 밑에는 수정 필요
export const Logo = styled.div`
  display: flex;
  width: 110px;
  height: 110px;
  padding: 10.178px 21.428px 14.706px 20.41px;
  justify-content: center;
  align-items: center;

  #icon {
    display: flex;
    width: 61.111px;
    height: 61.111px;
    padding: 4.722px 0.728px 4.184px 0.728px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  #title {
  }
`
