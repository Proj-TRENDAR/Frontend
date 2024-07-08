import * as S from './style'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { useTheme } from 'styled-components'
import { themeAtom } from '@/store'
import { themeList } from '@/styles/theme'
import IconButton from '@components/common/button/IconButton'
import ThemeIcon from '@assets/image/icon/ic-theme.svg?react'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'

export default function ThemeSelector() {
  const nowTheme = useTheme()
  const color = nowTheme.point
  const [theme, setTheme] = useAtom(themeAtom)
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)

  const handlePaletteClick = () => {
    setIsPaletteOpen(!isPaletteOpen)
  }
  const clickTheme = (idx: number) => {
    setTheme(themeList[idx])
  }
  return (
    <S.Theme isPaletteOpen={isPaletteOpen} themeCount={themeList.length}>
      <IconButton
        onClick={() => {
          handlePaletteClick()
        }}
        style={{ height: '32px', width: '32px' }}
      >
        <ThemeIcon className="icon" style={{ color }} />
      </IconButton>
      {isPaletteOpen && (
        <div className="palette">
          {themeList.map((item, index) => {
            return (
              <div
                style={{ backgroundColor: item.point }}
                className="color-circle"
                onClick={() => {
                  clickTheme(index)
                }}
              >
                {theme === themeList[index] && <CheckedIcon />}
              </div>
            )
          })}
        </div>
      )}
    </S.Theme>
  )
}
