import { DefaultTheme, css } from 'styled-components'

import NANUM_BARUN_GOTHIC from '@assets/font/nanumbarungothic.otf'
import NANUM_BARUN_GOTHIC_BOLD from '@assets/font/nanumbarungothicbold.otf'
import NANUM_BARUN_GOTHIC_ULTRA_LIGHT from '@assets/font/nanumbarungothicultralight.otf'

export const basicTheme: DefaultTheme = {
  point: '#1FC6D0',
  pointHover: '#00ABB5',
  point2: '#B1E7DD',
  point3: '#F8FFFF',
  pointBg: '#F3F9FA',
  r1: '#F9A1A4',
  r2: '#CE9AD0',
  r3: '#91D8D8',
  r4: '#FFB789',
  r5: '#C0E394',
  r6: '#FBD386',
  r7: '#91C4F4',
  s1: '#FDDFE1',
  s2: '#F4E3F4',
  s3: '#DEF5F5',
  s4: '#FFE7D8',
  s5: '#E8F6D6',
  s6: '#FFEFD1',
  s7: '#E2ECF6',
  dayColorOfSat: '#4573E9', // 토요일 색
  dayColorOfSun: '#E43636', // 일요일 색
  dayColorOfWeekday: '#484848', // 주간 색
  basicBg: '#FFFFFF',
  cancelBgColor: '#FFC7C3',
  grayLine: '#EDEDED',
  grayBt: '#A9A9A9',
  grayBtLight: '#F0F0F0',
  text: '#333333',
  text98: '#989898',
  textInfo: '#7C7C7C',
  textLight: '#CBCBCB',
  textRed: '#E43636',
  textRedDark: '#CC1212',

  labelGray: '#D0D0D0',
  placeholder: '#CDCDCD',
  toggleUnChecked: '#F4F4F4',
  checkedColor: '#1DB993',
  checkedTextColor: '#DDDDDD',
}

export const darkTheme: DefaultTheme = {
  point: '#614ED7',
  pointHover: '#4734ce',
  point2: '#4A546E',
  point3: '#16243D',
  pointBg: '#16243D',
  r1: '#5F5CD1',
  r2: '#36A58A',
  r3: '#4B8199',
  r4: '#217EEB',
  r5: '#9C55AF',
  r6: '#0B99B8',
  r7: '#D1777A',
  s1: '#171632',
  s2: '#022D24',
  s3: '#122027',
  s4: '#0F183A',
  s5: '#25132A',
  s6: '#011C21',
  s7: '#2C1916',
  dayColorOfSat: '#3655E6', // 토요일 색
  dayColorOfSun: '#A61832', // 일요일 색
  dayColorOfWeekday: '#ECECEC', // 주간 색
  basicBg: '#0E1218',
  cancelBgColor: '#FFC7C3',
  grayLine: '#4E5972',
  grayBt: '#A9A9A9',
  grayBtLight: '#F0F0F0',
  text: '#ECECEC',
  text98: '#989898',
  textInfo: '#7C7C7C',
  textLight: '#CBCBCB',
  textRed: '#F44336',
  textRedDark: '#E57373',

  labelGray: '#D0D0D0',
  placeholder: '#CDCDCD',
  toggleUnChecked: '#333a4a',
  checkedColor: '#1DB993',
  checkedTextColor: '#DDDDDD',
}

export const brownTheme: DefaultTheme = {
  point: '#77634E',
  pointHover: '#795b41',
  point2: '#B8D6B7',
  point3: '#E9ECE1',
  pointBg: '#E9ECE1',
  r1: '#76AC99',
  r2: '#EFC77A',
  r3: '#DACB8C',
  r4: '#BCD37A',
  r5: '#CEB289',
  r6: '#9FBD7A',
  r7: '#ACC1B6',
  s1: '#BED1AD',
  s2: '#F4D495',
  s3: '#EBDFAA',
  s4: '#D1D2A0',
  s5: '#E7C7A5',
  s6: '#C6E3AD',
  s7: '#CFDDD6',
  dayColorOfSat: '#4573E9', // 토요일 색
  dayColorOfSun: '#E43636', // 일요일 색
  dayColorOfWeekday: '#484848', // 주간 색
  basicBg: '#FBF6F1',
  cancelBgColor: '#FFC7C3',
  grayLine: '#EDEDED',
  grayBt: '#A9A9A9',
  grayBtLight: '#F0F0F0',
  text: '#413D3B',
  text98: '#989898',
  textInfo: '#7C7C7C',
  textLight: '#CBCBCB',
  textRed: '#E43636',
  textRedDark: '#CC1212',

  labelGray: '#D0D0D0',
  placeholder: '#CDCDCD',
  toggleUnChecked: '#EEEEEE',
  checkedColor: '#1DB993',
  checkedTextColor: '#DDDDDD',
}

export const fluorescentTheme: DefaultTheme = {
  point: '#FE1D57',
  pointHover: '#ff0042',
  point2: '#BFD9FF',
  point3: '#F8F8F8',
  pointBg: '#F8F8F8',
  r1: '#F89A56',
  r2: '#FF6F6F',
  r3: '#FCDE44',
  r4: '#5AE3A1',
  r5: '#4CBFF9',
  r6: '#6B8AF6',
  r7: '#FF6F9A',
  s1: '#FFAF75',
  s2: '#FF9A94',
  s3: '#FFF280',
  s4: '#9AF0C7',
  s5: '#76D2FF',
  s6: '#8CA5FF',
  s7: '#FF99B8',
  dayColorOfSat: '#4573E9', // 토요일 색
  dayColorOfSun: '#E43636', // 일요일 색
  dayColorOfWeekday: '#484848', // 주간 색
  basicBg: '#FFFFFF',
  cancelBgColor: '#FFC7C3',
  grayLine: '#EDEDED',
  grayBt: '#A9A9A9',
  grayBtLight: '#F0F0F0',
  text: '#333333',
  text98: '#989898',
  textInfo: '#7C7C7C',
  textLight: '#CBCBCB',
  textRed: '#E43636',
  textRedDark: '#CC1212',

  labelGray: '#D0D0D0',
  placeholder: '#CDCDCD',
  toggleUnChecked: '#F4F4F4',
  checkedColor: '#1DB993',
  checkedTextColor: '#DDDDDD',
}

export const coolGrayTheme: DefaultTheme = {
  point: '#3C404C',
  pointHover: '#30384d',
  point2: '#DFDFDF',
  point3: '#F1F1F1',
  pointBg: '#F1F1F1',
  r1: '#E0A58A',
  r2: '#B7A599',
  r3: '#BEBEBE',
  r4: '#668DA4',
  r5: '#BB8391',
  r6: '#A6D0D0',
  r7: '#9696A0',
  s1: '#F2D9CE',
  s2: '#F4EBE5',
  s3: '#F4F4F4',
  s4: '#95C5E0',
  s5: '#DDC5CB',
  s6: '#E9F2F2',
  s7: '#E6E6E7',
  dayColorOfSat: '#4573E9', // 토요일 색
  dayColorOfSun: '#E43636', // 일요일 색
  dayColorOfWeekday: '#484848', // 주간 색
  basicBg: '#FFFFFF',
  cancelBgColor: '#FFC7C3',
  grayLine: '#EDEDED',
  grayBt: '#A9A9A9',
  grayBtLight: '#F0F0F0',
  text: '#333333',
  text98: '#989898',
  textInfo: '#7C7C7C',
  textLight: '#CBCBCB',
  textRed: '#E43636',
  textRedDark: '#CC1212',

  labelGray: '#D0D0D0',
  placeholder: '#CDCDCD',
  toggleUnChecked: '#F4F4F4',
  checkedColor: '#1DB993',
  checkedTextColor: '#DDDDDD',
}

export const themeList = [basicTheme, darkTheme, brownTheme, fluorescentTheme, coolGrayTheme]

export const fonts = css`
  @font-face {
    font-family: 'NanumBarunGothic';
    src: url(${NANUM_BARUN_GOTHIC}) format('opentype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'NanumBarunGothic';
    src: url(${NANUM_BARUN_GOTHIC_BOLD}) format('opentype');
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'NanumBarunGothic';
    src: url(${NANUM_BARUN_GOTHIC_ULTRA_LIGHT}) format('opentype');
    font-style: normal;
    font-weight: 300;
  }

  .nanumbarungothic {
    font-family: 'NanumBarunGothic', sans-serif;
  }
`
