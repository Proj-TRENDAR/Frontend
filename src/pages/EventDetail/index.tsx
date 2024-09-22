import PageLayout from '@layouts/Page'
import { useTheme } from 'styled-components'
import * as S from './style.ts'
import { useAtom } from 'jotai/index'
import { eventInfoAtom } from '@/store/eventAtoms.ts'
import IconInputWrapper from '@components/common/input/IconInputWrapper'

import Place from '@assets/image/icon/event/ic-place.svg?react'
import Memo from '@assets/image/icon/event/ic-memo.svg?react'
import Clock from '@assets/image/icon/event/ic-clock.svg?react'
import Button from '@components/common/button/Button'
import dateFormat from '@/utils/dateFormat.ts'
import { useNavigate } from 'react-router'

//0 = 일요일, 1 = 월요일, 2 = 화요일, 3 = 수요일, 4 = 목요일, 5 = 금요일, 6 = 토요일

export default function EventDetail() {
  // TODO: 일정 가져와야햇✅
  //   일정 출력 📌 API 수정 필요
  //   수정 버튼, 삭제 버튼 추가

  const [{ selectedEvent }] = useAtom(eventInfoAtom)
  const navigate = useNavigate()

  console.debug(selectedEvent)

  // const [event, setEvent] = useState<ICreateEvent>(initial)
  const theme = useTheme()

  if (selectedEvent === undefined) {
    navigate('/')
  }

  return (
    <S.Wrapper className="detail">
      <PageLayout title="일정 보기2" backgroundColor={theme.basicBg}>
        {/*TODO: selectedEvent.color, isAllDay에 따라 보여주어야함 */}
        <div className="line">
          <S.Title>
            {selectedEvent.being !== null ? (
              <div
                style={{
                  ...(selectedEvent.isAllDay
                    ? {
                        backgroundColor: theme[`s${selectedEvent.color}`],
                      }
                    : {
                        backgroundColor: 'unset',
                        border: `solid 2px ${theme[`s${selectedEvent.color}`]}`,
                      }),
                }}
              >
                {selectedEvent.title}
              </div>
            ) : (
              selectedEvent?.title
            )}
          </S.Title>
        </div>
        <div className="line">
          {selectedEvent?.isAllDay ? (
            <IconInputWrapper icon={<Clock />}>
              <S.Text>
                {dateFormat(new Date(selectedEvent?.startTime), 'YYYY년 MM월 DD일(d요일)')}
                <br /> ~ {dateFormat(new Date(selectedEvent?.endTime), 'YYYY년 MM월 DD일(d요일)')}
                {!selectedEvent?.isRecurringData && (
                  <>
                    <br />
                    <span className="no-content">반복 없음</span>
                  </>
                )}
              </S.Text>
            </IconInputWrapper>
          ) : (
            <IconInputWrapper icon={<Clock />}>
              <S.Text>
                {dateFormat(new Date(selectedEvent?.startTime), 'YYYY년 MM월 DD일(d요일) hh:mm')}
                <br /> ~ {dateFormat(new Date(selectedEvent?.endTime), 'YYYY년 MM월 DD일(d요일) hh:mm')}
                {!selectedEvent?.isRecurringData && (
                  <>
                    <br />
                    <span className="no-content">반복 없음</span>
                  </>
                )}
              </S.Text>
            </IconInputWrapper>
          )}
        </div>
        <div className="line">
          <IconInputWrapper icon={<Place />}>
            <S.Text>{selectedEvent?.place ?? <span className="no-content">내용없음</span>}</S.Text>
          </IconInputWrapper>
        </div>
        <IconInputWrapper icon={<Memo />}>
          <S.Text>{selectedEvent?.description ?? <span className="no-content">내용없음</span>}</S.Text>
        </IconInputWrapper>
        <S.ButtonWrapper>
          <Button
            size="small"
            onCLick={() => {
              //   TODO: 수정 페이지로 이동
            }}
          >
            수정
          </Button>
          <Button
            color={theme.grayBt}
            size="small"
            onCLick={() => {
              //   TODO: 삭제 모달 추가(API 추가)
            }}
          >
            삭제
          </Button>
        </S.ButtonWrapper>
      </PageLayout>
    </S.Wrapper>
  )
}
