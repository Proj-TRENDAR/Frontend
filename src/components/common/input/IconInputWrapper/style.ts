import { css, styled } from 'styled-components'

const inputStyle = css`
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1em;
  padding: 8px;
  border-radius: 4px;
  border: none;
  font-family: 'NanumBarunGothic';
  font-weight: 200;
  &:focus,
  &:active {
    outline: solid 1px ${({ theme }) => theme.pointHover}30;
  }
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`
export const IconInputWrapper = styled.div`
  display: flex;
  width: 100%;
  .icon-wrapper {
    padding: 2px 0;
    width: 30px;
    height: 30px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      ${inputStyle};
    }
    textarea {
      word-break: break-all;
      ${inputStyle};
      resize: none;
      height: 7em;
      line-height: 1.3em;

      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.basicBg};
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: ${({ theme }) => theme.pointText}30;
      }
    }
  }
`
