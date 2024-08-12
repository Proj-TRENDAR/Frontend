import * as S from './style'
import { useState } from 'react'
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handlePaletteClick = () => {
    setIsPaletteOpen(!isPaletteOpen)
  }
  const clickTheme = async (idx: number) => {
    try {
      const result = await changeTheme(idx)
      if (!result) {
        throw new Error('테마 변경 실패')
      }
      setTheme(themeList[idx])
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <S.Theme isPaletteOpen={isPaletteOpen} themeCount={themeList.length}>
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
      {errorMessage && <ErrorAlertModal errorMessage={errorMessage} onClose={() => setErrorMessage(null)} />}
    </S.Theme>
  )
}
