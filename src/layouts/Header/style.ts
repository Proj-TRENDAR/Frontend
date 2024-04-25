import { styled } from 'styled-components'

export const Header = styled.header`
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  & > div:first-child {
    z-index: 1; // 유저 메뉴가 캘린더에 가려지지 않기 위함
  }
`
