// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import useScrollFadeIn from '@/Hooks/useScrollFadeIn'
import Guide1 from '@/assets/image/guide/guide1.png'
import Guide2 from '@assets/image/guide/guide2.png'
import Routine1 from '@/assets/image/guide/routine1.png'
import Routine2 from '@/assets/image/guide/routine2.png'
import Todo1 from '@/assets/image/guide/todo1.png'
import Todo2 from '@/assets/image/guide/todo2.png'
import StyleGroup from '@/assets/image/guide/styleGroup.png'
import TodoLogo from '@/assets/image/guide/todoLogo.png'
import RoutineLogo from '@/assets/image/guide/routineLogo.png'
import CalendarLogo from '@/assets/image/guide/calendarLogo.png'
import Plus from '@/assets/image/icon/ic-plus.svg?react'
import Button from '@components/common/button/Button'
import * as S from './style'

export default function Guide() {
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <S.GuideContainer>
      <S.GuideColumnWrapper>
        <S.GuideTextHeader style={{ margin: '5.67rem 0 0.75rem 0' }}>
          나의 하루를 한 눈에 보고
          <br /> 간편하게 기록해요
        </S.GuideTextHeader>
        <S.GuideImage $path={Guide1} />
      </S.GuideColumnWrapper>
      <S.GuideColumnWrapper {...useScrollFadeIn('up', 1, 0.2)}>
        <S.GuideTextTitle style={{ margin: '5.73rem 0 1.65rem 0' }}>일정 관리</S.GuideTextTitle>
        <S.GuideText style={{ marginBottom: '1.7rem' }}>
          직관적인 일정 등록으로 시간을 효율적으로 관리해보세요
        </S.GuideText>
        <S.GuideImage $path={Guide2} />
      </S.GuideColumnWrapper>
      <S.GuideWrapper {...useScrollFadeIn('left', 1, 0.3)}>
        <S.GuideTextTitle style={{ margin: '5.73rem 0 1.65rem 0', top: 166 }}>루틴 관리</S.GuideTextTitle>
        <S.GuideText style={{ top: 191 }}>
          <br />
          일상 속 작은 목표를 달성해보세요
          <br /> <br />
          긍정적인 변화가 하나 둘,
          <br /> 쌓이는 모습을 즐기며
          <br /> 더 나은 습관을 만들어보세요.
        </S.GuideText>
        <S.Stars />
        <S.FixedLocationImage $path={Routine1} style={{ top: 123, left: 240, width: 314, height: 472 }} />
        <S.FixedLocationImage $path={Routine2} style={{ top: 193, left: 575, width: 236, height: 472 }} />
      </S.GuideWrapper>
      <S.GuideWrapper {...useScrollFadeIn('right', 1, 0.3)}>
        <S.FixedLocationImage $path={Todo1} style={{ top: 66, left: 31, width: 212, height: 545 }} />
        <S.FixedLocationImage $path={Todo2} style={{ top: 217, left: 296, width: 212, height: 471 }} />
        <S.GuideTextTitle style={{ margin: '5.73rem 0 1.65rem 0', top: 193, left: 561 }}>할일 관리</S.GuideTextTitle>
        <S.GuideText style={{ top: 217, left: 561 }}>
          <br />
          루틴과 일정과 함께
          <br />
          오늘의 할 일을 빠르게 확인해보세요.
          <br />
          <br />
          또한 주간 목록을 통해
          <br />
          일주일을 점검할 수 있어요
        </S.GuideText>
      </S.GuideWrapper>
      <S.GuideColumnWrapper {...useScrollFadeIn('up', 1, 0.3)}>
        <S.GuideText>마음에 드는 색상을 선택해 나만의 스타일로 TRANDAR를 사용해보세요.</S.GuideText>
        <S.GuideImage $path={StyleGroup} style={{ backgroundSize: 'auto', height: 410 }} />
      </S.GuideColumnWrapper>
      <S.GuideColumnWrapper>
        <div {...useScrollFadeIn('up', 1, 0.3)}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <S.GuideTextTitle>
              일상의 모든 기록을 한 곳에서 관리할 수 있는 <span style={{ color: '#4482F9' }}>TRENDAR</span>로
              <br />
              자기주도적인 삶을 스마트하게 이끌어가세요
            </S.GuideTextTitle>
            <S.LogoDetail>
              <img src={TodoLogo} alt="To Do Logo" />
              <Plus />
              <img src={RoutineLogo} alt="Routine Logo" />
              <Plus />
              <img src={CalendarLogo} alt="Calendar Logo" />
            </S.LogoDetail>
            <Button id="round-button" size="large" $outline={true} $round={true} onClick={goToLogin}>
              트렌더 시작하기
            </Button>
          </div>
        </div>
      </S.GuideColumnWrapper>
    </S.GuideContainer>
  )
}
