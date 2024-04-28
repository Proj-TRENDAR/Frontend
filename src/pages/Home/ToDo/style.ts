import { css, styled } from 'styled-components'

import { PageHeader } from '@layouts/PageHeader/style.ts'

export const ToDoWrapper = css`
  background-color: ${({ theme }) => theme.basicBg};
`
export const ItemContent = css`
  flex-direction: column;
`
export const Content = styled.div`
  margin: 8px 4px;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
`
export const EmptyList = styled.div`
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
