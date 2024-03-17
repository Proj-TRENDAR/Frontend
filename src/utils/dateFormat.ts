const dateFormat = (date: Date, formatName = 'YYYY년 MM월 DD일'): string => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const dateNum = date.getDate()
  let newFormatName = formatName

  if (formatName.includes('YYYY')) {
    newFormatName = newFormatName.replace('YYYY', year.toString())
  }

  if (formatName.includes('MM')) {
    newFormatName = newFormatName.replace('MM', (month + 1).toString())
  }

  if (formatName.includes('DD')) {
    newFormatName = newFormatName.replace('DD', dateNum.toString())
  }

  return newFormatName
}

export default dateFormat
