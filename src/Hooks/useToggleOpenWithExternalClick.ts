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
      setIsOpen(true)
    }
  }

  return [isOpen, setIsOpen, isExternalClickDetected]
}
