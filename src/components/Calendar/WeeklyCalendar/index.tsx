import { useTheme } from 'styled-components'

export default function WeeklyCalendar() {
  const theme = useTheme()
  return (
    <div style={{ textAlign: 'center', padding: '30px', color: theme.textInfo }}>'주간 캘린더'는 준비중입니다.</div>
  )
}
