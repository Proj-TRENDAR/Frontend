import { useState } from 'react'

export default function useToggleOpenWithExternalClick(): [
  boolean,
  (isOpen: boolean) => void,
  (target: HTMLElement) => void
] {
  const [isOpen, setIsOpen] = useState(false)

  const isExternalClickDetected = (target: HTMLElement): void => {
    const handleExternalClick = (e: MouseEvent) => {
      if (!target.contains(e.target as Node)) {
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
