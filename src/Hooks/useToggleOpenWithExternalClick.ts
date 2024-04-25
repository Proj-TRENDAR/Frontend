import { useState } from 'react'

export default function useToggleOpenWithExternalClick(): [
  boolean,
  (isOpen: boolean) => void,
  (target: HTMLElement) => void,
] {
  const [isOpen, setIsOpen] = useState(false)

  const isExternalClickDetected = (target: HTMLElement): void => {
    const handleExternalClick = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement

      // targetElement에 포함되지 않거나
      if (!target.contains(targetElement)) {
        const modalElement = document.querySelector('.alert-modal')
        if (modalElement && modalElement.contains(targetElement)) {
          return true
        }

        // targetElement내부 클릭으로 인해 나타난 다른 element에 포함되지 않을때
        // 외부클릭으로 판단하고 닫힘
        setIsOpen(false)
        window.removeEventListener('mousedown', handleExternalClick)
      }
    }
    if (!isOpen) {
      window.addEventListener('mousedown', handleExternalClick)
      // FIXME: CalendarHeaderDatePicker에서 사용시, html구조상 가운데 버튼 외 다른 버튼 클릭시에도
      // 모달이 열리는 것을 막기위해 숨김 처리함
      // * 아래 코드가 없어도 기존 사용에 문제가 되지 않을것같으나
      // 만약 이슈 발생시 CalendarHeaderDatePicker에서만 아래줄을 제외하도록 수정할것.
      // 이슈가 발생하지 않는다면 아래줄 삭제할 예정.
      // setIsOpen(true)
    }
  }

  return [isOpen, setIsOpen, isExternalClickDetected]
}
