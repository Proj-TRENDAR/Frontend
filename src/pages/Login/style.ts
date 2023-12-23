import { styled } from 'styled-components'

export const Layout = styled.div`
  width: 20rem;
  gap: 64px;

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
  width: 100%;
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

export const Logo = styled.div`
  gap: 6.55px;
  width: 90px;
  height: 90px;
  padding: 8.328px 17.532px 12.032px 16.699px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  #text {
    color: var(--textInfo, #7c7c7c);
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
  }
`
export const ButtonWrapper = styled.div`
  gap: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`
