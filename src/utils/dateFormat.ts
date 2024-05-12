const getWeekOfMonth = (date: Date): { year: number; month: number; week: number } => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const firstDateOfMonth = new Date(year, month, 1) // 선택 월의 1일 정보
  const firstDayOfMonth = firstDateOfMonth.getDay() // 선택 월의 1일의 요일
  const lastDateOfMonth = new Date(year, month + 1, 0) // 선택 월의 마지막일 정보
  const lastDayOfMonth = lastDateOfMonth.getDay() // 선택 월의 마지막일의 요일

  const weeksFromDate = Math.ceil((firstDayOfMonth + day) / 7) // 날짜 기준 주차수
  const weeksOfMonthFromDate = Math.ceil((firstDayOfMonth + lastDateOfMonth.getDate()) / 7) // 날짜 기준 총 주차수(≒마지막 주차)

  if (weeksFromDate === 1) {
    if (firstDayOfMonth <= 3) {
      // 이번달 기준으로 첫 주차 시작
      return { year, month, week: weeksFromDate }
    } else {
      // 전월 마지막 주차
      const weeksOfLastMonth = Math.ceil(
        (new Date(year, month - 1, 1).getDay() + new Date(year, month, 0).getDate()) / 7
      ) // 지난 달의 주의 개수
      const lastWeekOfLastMonth = new Date(year, month - 1, 1).getDay() <= 3 ? weeksOfLastMonth : weeksOfLastMonth - 1 // 지난 달의 마지막 주차
      return { year: month === 1 ? year - 1 : year, month: month < 1 ? 12 : month - 1, week: lastWeekOfLastMonth }
    }
  } else if (weeksFromDate === weeksOfMonthFromDate) {
    if (lastDayOfMonth < 3) {
      // 다음달 첫 주차
      return { year: month === 11 ? year + 1 : year, month: month === 11 ? 0 : month + 1, week: 1 }
    } else {
      // 이번달 마지막 주차
      const lastWeekFromDate = firstDayOfMonth <= 3 ? weeksFromDate : weeksFromDate - 1
      return { year, month: month, week: lastWeekFromDate }
    }
  }

  return { year, month, week: firstDayOfMonth <= 3 ? weeksFromDate : weeksFromDate - 1 }
}

const dateFormat = (date: Date, formatName = 'YYYY년 MM월 W주차 DD일 d요일'): string => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let week = null
  const dateNum = date.getDate()
  const dayNum = date.getDay()
  const dayTitle = ['일', '월', '화', '수', '목', '금', '토']
  let newFormatName = formatName
  if (formatName.includes('W')) {
    const { year: weekYear, month: weekMonth, week: weekNum } = getWeekOfMonth(date)
    year = weekYear
    month = weekMonth
    week = weekNum
  }

  if (formatName.includes('YYYY')) {
    newFormatName = newFormatName.replace('YYYY', year.toString())
  }

  if (formatName.includes('MM')) {
    newFormatName = newFormatName.replace('MM', (month + 1).toString())
  }

  if (formatName.includes('W')) {
    newFormatName = newFormatName.replace('W', week.toString())
  }

  if (formatName.includes('DD')) {
    newFormatName = newFormatName.replace('DD', dateNum.toString())
  }

  if (formatName.includes('d')) {
    newFormatName = newFormatName.replace('d', dayTitle[dayNum])
  }
  if (formatName.includes('hh')) {
    newFormatName = newFormatName.replace('hh', date.getHours().toString())
  }
  if (formatName.includes('mm')) {
    newFormatName = newFormatName.replace('mm', date.getMinutes().toString())
  }
  if (formatName.includes('ss')) {
    newFormatName = newFormatName.replace('ss', date.getSeconds().toString())
  }

  return newFormatName
}

export default dateFormat
