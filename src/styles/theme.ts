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
  pointText: '#599086',
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
  checkedColor: '#1DB993',
  checkedTextColor: '#DDDDDD',
}

export const darkTheme: DefaultTheme = {
  point: '#0D7377',
  pointHover: '#14FFEC',
  point2: '#323232',
  point3: '#212121',
  pointBg: '#1B1B1B',
  pointText: '#EAEAEA',
  r1: '#FF6F61',
  r2: '#D4A5A5',
  r3: '#7A7A7A',
  r4: '#DFAF2B',
  r5: '#B5CC2E',
  r6: '#FFBF00',
  r7: '#009FFD',
  s1: '#EF767A',
  s2: '#AA6373',
  s3: '#2A2B2D',
  s4: '#FFA36C',
  s5: '#F4A261',
  s6: '#E0A899',
  s7: '#B8C1EC',
  dayColorOfSat: '#3655E6', // 토요일 색
  dayColorOfSun: '#A61832', // 일요일 색
  dayColorOfWeekday: '#4B4B4B', // 주간 색
  basicBg: '#121212',
  cancelBgColor: '#C34A36',
  grayLine: '#3A3A3A',
  grayBt: '#696969',
  grayBtLight: '#4E4E4E',
  text: '#F5F5F5',
  text98: '#B0B0B0',
  textInfo: '#9A9A9A',
  textLight: '#707070',
  textRed: '#F44336',
  textRedDark: '#E57373',
  checkedColor: '#00E676',
  checkedTextColor: '#333333',
}

export const brownTheme: DefaultTheme = {
  point: '#77634E', //
  pointHover: '#7FCDC4',
  point2: '#E3F7F3',
  point3: '#E6F4EF',
  pointBg: '#E9ECE1', //
  pointText: '#599086',
  r1: '#F7D4D2',
  r2: '#F0D2E4',
  r3: '#C8E9E9',
  r4: '#FFCC9F',
  r5: '#9FBD7A', //
  r6: '#FBE5B1',
  r7: '#76AC99', //
  s1: '#BED1AD', //
  s2: '#E7C7A5', //
  s3: '#C6E3AD', //
  s4: '#EBDFAA', //
  s5: '#D1D2A0', //
  s6: '#F4D495', //
  s7: '#EBF3FA',
  dayColorOfSat: '#4573E9', // 토요일 색
  dayColorOfSun: '#E43636', // 일요일 색
  dayColorOfWeekday: '#484848', // 주간 색
  basicBg: '#FBF6F1', //
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
  checkedColor: '#1DB993',
  checkedTextColor: '#DDDDDD',
}
// TODO: 다른 컬러테마 추가

export const themeList = [basicTheme, darkTheme, brownTheme]

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
