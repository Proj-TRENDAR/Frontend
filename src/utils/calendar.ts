export default class Calendar {
  day = ['일', '월', '화', '수', '목', '금', '토']
  getMonthDates = (
    thisDate: Date
  ): {
    prevMonthDates: Date[]
    thisMonthDates: Date[]
    nextMonthDates: Date[]
  } => {
    // 선택한 날짜(thisDate)를 기준으로 이번달 전체 날짜들(thisMonthDates)을 가져옵니다.
    // 달력 전후에 함께 출력할 이전달의 일부 날짜들(prevMonthDates), 다음달의 일부 날짜들(nextMonthDates)를 가져옵니다.

    const thisYear = thisDate.getFullYear() // 이번년도
    const thisMonth = thisDate.getMonth() // 이번달

    const lastDate = new Date(thisYear, thisMonth + 1, 0).getDate() // 이번달 마지막날 일자

    const prevMonthDates = [] // 저번달 마지막날 ~ 마지막 일요일까지
    const thisMonthDates = [] // 이번달 전체
    const nextMonthDates = [] // 다음달 첫날 ~ 첫 토요일까지

    // 1. 이번달 시작이 일요일이 아니라면 저번달 마지막날부터 마지막 일요일까지 추가
    let prevNum = 1 // 저번달 마지막 일요일까지 1씩 감소됨
    let prevDate = new Date(thisYear, thisMonth, prevNum) // 이번달 첫날로 초기화

    while (prevDate.getDay() !== 0) {
      prevNum--
      const morePrevDate = new Date(thisYear, thisMonth, prevNum)
      prevMonthDates.unshift(morePrevDate)
      prevDate = morePrevDate
    }

    // 2. 이번달 날짜 전체 추가
    for (let i = 1; i <= lastDate; i++) {
      thisMonthDates.push(new Date(thisYear, thisMonth, i))
    }

    // 3. 이번달 마지막 날짜가 토요일이 아니라면 다음달 첫날부터 첫 토요일까지 추가
    let nextNum = 1 // 다음달 첫 토요일까지 1씩 증가됨
    let nextDate = new Date(thisYear, thisMonth + 1, 0) // 이번달 마지막날로 초기화

    while (nextDate.getDay() !== 6) {
      const moreNextDate = new Date(thisYear, thisMonth + 1, nextNum)
      nextMonthDates.push(moreNextDate)
      nextDate = moreNextDate
      nextNum++
    }

    // console.debug('선택된 날짜: ', thisDate)
    // console.debug('이번년도:', thisYear, ', 이번달:', thisMonth)
    //
    // console.group('getMonthDates 결과')
    // console.debug('저번달 일부', prevMonthDates)
    // console.debug('이번달 전체', thisMonthDates)
    // console.debug('다음달 일부', nextMonthDates)
    // console.groupEnd()

    return { prevMonthDates, thisMonthDates, nextMonthDates }
  }
}
