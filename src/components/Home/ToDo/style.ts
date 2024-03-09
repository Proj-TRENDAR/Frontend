import { css, styled } from 'styled-components'

import { PageHeader } from '@layouts/PageHeader/style'

export const ToDoWrapper = css`
  background-color: ${({ theme }) => theme.basicBg};
`
export const Content = styled.div`
  margin: 8px 0;
  gap: 8px;
	
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  .prev-button,
  .next-button {
    padding: 0;
    line-height: 0;
    background-color: unset;
    border: none;

    & > svg {
      width: 30px;
      height: 30px;
    }
  }

  .prev-button > svg {
    transform: rotate(90deg);
  }

  .next-button > svg {
    transform: rotate(-90deg);
  }
`
export const EmptyContent = styled.div`
  margin: 14px 0;
  gap: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p.description {
    text-align: center;

    font-size: 14px;
    font-weight: 200;
    line-height: 150%;
    color: ${({ theme }) => theme.textInfo};
  }
  .exam-content {
    width: 245px;
    padding: 12px;

    position: relative;

    background-color: ${({ theme }) => theme.point3};
    border: solid 2px ${({ theme }) => theme.point2};
    border-radius: 7px;

    pointer-events: none;

    &::before {
      width: 12px;
      height: 12px;

      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(0, -60%) rotateZ(-45deg);

      background-color: ${({ theme }) => theme.point3};
      border: solid 2px ${({ theme }) => theme.point2};
      border-left: 0;
      border-bottom: 0;

      content: '';
    }

    ul {
      li {
        span {
          font-size: 14px;
          color: ${({ theme }) => theme.textInfo};
        }
        button.more {
          display: none;
        }
      }
    }
  }
  .exam-title {
    margin-bottom: 4px;

    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.point};
  }
`

export { PageHeader }
