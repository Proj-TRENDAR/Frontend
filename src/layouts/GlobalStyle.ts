import { createGlobalStyle } from 'styled-components'

import { fonts } from '@layouts/theme'

export const GlobalStyle = createGlobalStyle`
${fonts}
  :root {
    font-size: 15px;
    background-color: ${({ theme }) => theme.basicBg};
    color: ${({ theme }) => theme.text};
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-family: 'NanumBarunGothic';
    overflow-wrap: break-word;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  :lang(ko) { word-break: keep-all; }

  header,
  footer,
  main,
  section,
  article,
  div,
  input {
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
    font-weight: normal;
  }
  
`
