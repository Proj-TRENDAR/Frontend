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
  grayLine: '#EDEDED',
  grayBt: '#A9A9A9',
  grayBtLight: '#F0F0F0',
  text: '#333333',
  textInfo: '#7C7C7C',
  textLight: '#CBCBCB',
  textRed: '#E43636',
  textRedDark: '#CC1212',
}

// TODO: 다른 컬러테마 추가

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
