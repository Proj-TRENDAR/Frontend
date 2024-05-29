import PageLayout from '@layouts/Page'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import Title from '@assets/image/icon/event/ic-title.svg?react'
import Place from '@assets/image/icon/event/ic-place.svg?react'
import Memo from '@assets/image/icon/event/ic-memo.svg?react'
import IconTextInput from '@components/common/input/IconTextInput'
import IconTextArea from '@components/common/input/IconTextArea'

export default function EventCreate() {
  const initial = { title: '', place: '', memo: '' }
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
