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
}
