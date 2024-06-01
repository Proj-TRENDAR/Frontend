import PageLayout from '@layouts/Page'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import Title from '@assets/image/icon/event/ic-title.svg?react'
import Place from '@assets/image/icon/event/ic-place.svg?react'
import Memo from '@assets/image/icon/event/ic-memo.svg?react'
import Clock from '@assets/image/icon/event/ic-clock.svg?react'
import IconTextInput from '@components/common/input/IconTextInput'
import IconTextArea from '@components/common/input/IconTextArea'
import IconInputWrapper from '@components/common/input/IconInputWrapper'
import ToggleButton from '@components/common/input/ToggleButton'
import ColorRadioButton from '@components/common/input/ColorRadioButton'

export default function EventCreate() {
  const initial = { title: '', place: '', memo: '', isAllDay: false, color: '' }
  const [event, setEvent] = useState(initial)
  const theme = useTheme()
  return (
    <PageLayout title="일정 추가" backgroundColor={theme.pointBg}>
      <IconTextInput
        id="title"
        icon={<Title />}
        value={event.title}
        setValue={(title: string) => {
          setEvent({ ...event, title: title })
        }}
        placeholder="제목 입력"
      />
      <IconInputWrapper icon={<Clock />} $backgroundColor="#fff">
        <ToggleButton
          id="isAllDay"
          label="하루 종일"
          isChecked={event.isAllDay}
          handleToggle={(isAllDay: boolean) => {
            setEvent({ ...event, isAllDay: isAllDay })
          }}
        />
        <div>
          {/* TODO: 선택된 날짜에 현재 시간 가져와야함 */}
          <div>
            <input id="start-date" value={'2024년 5월 25일(토)'} />
            <input id="start-time" value={'11 : 00 PM'} />
            <span>~ </span>
            <input id="end-date" value={'2024년 5월 25일(토)'} />
            <input id="end-time" value={'11 : 00 PM'} />
          </div>
        </div>
        <ColorRadioButton
          color="event"
          value={event.color}
          setValue={(color: string) => {
            setEvent({ ...event, color: color })
          }}
        />
      </IconInputWrapper>
      <IconTextInput
        id="title"
        icon={<Place />}
        value={event.place}
        setValue={(place: string) => {
          setEvent({ ...event, place: place })
        }}
        placeholder="장소 입력"
      />
      <IconTextArea
        icon={<Memo />}
        id="memo"
        value={event.memo}
        setValue={(memo: string) => {
          setEvent({ ...event, memo: memo })
        }}
        placeholder="메모 입력"
      />
    </PageLayout>
  )
}
