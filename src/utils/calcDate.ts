export default class HandleDate {
  // 예) calcYear(date, -3) : date기준 3년전 날짜를 리턴함
  calcYear = (date: Date, calcYear: number) => {
    const currentDate = new Date(date)
    return new Date(currentDate.setFullYear(currentDate.getFullYear() + calcYear))
  }

  // 예) calcMonth(date, -3) : date기준 3달전 날짜를 리턴함
  calcMonth = (date: Date, calcMonth: number) => {
    const currentDate = new Date(date)
    return new Date(currentDate.setMonth(currentDate.getMonth() + calcMonth))
  }

  // 예) changeMonth(date, 2) : date를 2월로 바꾼 날짜를 리턴함
  changeMonth = (date: Date, newMonth: number) => {
    const thisDate = new Date(date)
    const year = thisDate.getFullYear()
    const dateNum = thisDate.getDate()
    return new Date(year, newMonth, dateNum)
  }

  // 같은 날짜면 true, 아니면 false 리턴함(년, 월, 일 만 비교)
  isSameDate = (date1: Date, date2: Date) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
}
