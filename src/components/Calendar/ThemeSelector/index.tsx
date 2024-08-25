import * as S from './style'
import { useState, useEffect, useRef } from 'react'
import { useAtom } from 'jotai'
import { useTheme } from 'styled-components'
import { themeAtom } from '@/store'
import { themeList } from '@/styles/theme'
import IconButton from '@components/common/button/IconButton'
import ErrorAlertModal from '@components/common/modal/ErrorModal'
import ThemeIcon from '@assets/image/icon/ic-theme.svg?react'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import { changeTheme } from '@/api/User/userApi.ts'

export default function ThemeSelector() {
  const nowTheme = useTheme()
  const color = nowTheme.point
  const [theme, setTheme] = useAtom(themeAtom)
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false)
  const paletteRef = useRef<HTMLDivElement>(null)

  const handlePaletteClick = () => {
    setIsPaletteOpen(!isPaletteOpen)
  }

  const clickTheme = async (idx: number) => {
    const result = await changeTheme(idx)
    if (!result) {
      return setOpenErrorModal(true)
    }
    setTheme(themeList[idx])
  }

  const handleClickOutside = (event: { target: any }) => {
    if (paletteRef.current && !paletteRef.current.contains(event.target)) {
      setIsPaletteOpen(false)
    }
  }

  useEffect(() => {
    if (isPaletteOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isPaletteOpen])

  return (
    <S.Theme $isPaletteOpen={isPaletteOpen} $themeCount={themeList.length} ref={paletteRef}>
      <IconButton onClick={handlePaletteClick} style={{ height: '32px', width: '32px' }}>
        <ThemeIcon className="icon" style={{ color }} />
      </IconButton>
      {isPaletteOpen && (
        <div className="palette">
          {themeList.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.point }}
              className="color-circle"
              onClick={() => clickTheme(index)}
            >
              {theme === themeList[index] && <CheckedIcon />}
            </div>
          ))}
        </div>
      )}
      {openErrorModal && (
        <ErrorAlertModal errorMessage={'테마 변경 중 오류가 발생했습니다.'} onClose={() => setOpenErrorModal(false)} />
      )}
    </S.Theme>
  )
}
