import { styled } from 'styled-components'
import stars from '@/assets/image/guide/stars.png'

export const GuideContainer = styled.div`
  min-width: 60rem;
  padding: 0px 99px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;

  background: var(--pointBg, #f3f9fa);
`

export const GuideColumnWrapper = styled.div<any>`
  width: 811px;
  height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #round-button {
    width: 182px;
    height: 39px;

    border-radius: 22px;
  }
`

export const GuideImage = styled.div<{ $path: string }>`
  width: 803px;
  height: 525px;

  background-image: url(${props => props.$path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const GuideTextHeader = styled.span`
  text-align: center;

  font-family: NanumBarunGothic;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`

export const GuideTextTitle = styled.span`
  text-align: center;
  position: relative;

  font-family: NanumBarunGothic;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
`

export const GuideText = styled.span`
  text-align: center;
  position: relative;

  font-family: NanumBarunGothic;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`
export const GuideWrapper = styled.div<any>`
  width: 811px;
  height: 800px;

  position: relative;
`

export const FixedLocationImage = styled.div<{ $path: string }>`
  position: absolute;
  z-index: 1;

  background-image: url(${props => props.$path});
  background-repeat: no-repeat;
  background-position: center;
`

export const Stars = styled.div`
  width: 196px;
  height: 130px;
  top: 546px;
  left: 115px;

  position: absolute;

  background-image: url(${stars});
  background-repeat: no-repeat;
`

export const LogoDetail = styled.div`
  padding: 75px 0px 38px 0px;
  gap: 31px;

  display: inline-flex;
  align-items: center;
`
