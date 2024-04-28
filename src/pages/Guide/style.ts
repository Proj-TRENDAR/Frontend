import { styled } from 'styled-components'
import stars from '@/assets/image/guide/stars.png'

export const GuideContainer = styled.div`
  min-width: 60rem;
  padding: 0 99px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;

  background: var(--pointBg, #f3f9fa);
`

export const GuideColumnWrapper = styled.div`
  width: 811px;
  height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #round-button {
    width: 182px;
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

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`

export const GuideTextTitle = styled.span`
  text-align: center;
  position: relative;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
`

export const GuideText = styled.span`
  text-align: center;
  position: relative;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`
export const GuideWrapper = styled.div`
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

export const RoutineImage1 = styled(FixedLocationImage)`
  width: 314px;
  height: 472px;
  top: 123px;
  left: 240px;
`
export const RoutineImage2 = styled(FixedLocationImage)`
  width: 236px;
  height: 472px;
  top: 193px;
  left: 575px;
`
export const EventImage1 = styled(FixedLocationImage)`
  width: 212px;
  height: 545px;
  top: 66px;
  left: 31px;
`
export const EventImage2 = styled(FixedLocationImage)`
  width: 212px;
  height: 471px;
  top: 217px;
  left: 296px;
`
export const EventText = styled.div`
  height: 471px;
  margin: 5.73rem 0 1.65rem 0;
  top: 193px;
  left: 561px;

  position: absolute;
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
  padding: 75px 0 38px 0;
  gap: 31px;

  display: inline-flex;
  align-items: center;
`
