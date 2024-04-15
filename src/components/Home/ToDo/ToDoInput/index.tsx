import ButtonInAlert from '@components/common/button/ButtonInAlert'
import IconButton from '@components/common/button/IconButton'
import { useState } from 'react'
import X from '@/assets/image/icon/ic-x.svg?react'
import { createTodo } from '@/api/Todo/todoApi.ts'

// TODO: 인풋을 create와 edit때 공통으로 사용할 수 있지않을까요?
interface Props {
  appliedAt: Date
  close: () => void
  getTodo: () => Promise<void>
}

export function NewToDoInput({ appliedAt, close, getTodo }: Props) {
  const [newTodoTitle, setNewTodoTitle] = useState<string>('')

  const handleCreateTodo = async () => {
    if (newTodoTitle.trim() !== '') {
      // 새로운 할 일 추가
      const payload = {
        title: newTodoTitle.trim(),
        appliedAt: appliedAt,
      }
      const result = await createTodo(payload)
      if (result.status === 201) {
        setNewTodoTitle('') // 입력 필드 초기화
        close() // 입력 필드 닫기
        await getTodo()
      }
    }
  }

  return (
    <>
      <input
        type="text"
        value={newTodoTitle}
        className="title-input"
        autoFocus={true}
        onChange={e => setNewTodoTitle(e.target.value)}
        placeholder="새로운 할 일 입력"
      />
      <ButtonInAlert type="save" text="저장" disabled={!newTodoTitle} onClick={handleCreateTodo} />
      <IconButton
        onClick={() => {
          close() // 입력 필드 닫기
        }}
      >
        <X />
      </IconButton>
    </>
  )
}
