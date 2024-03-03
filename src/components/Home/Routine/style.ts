import { css, styled } from 'styled-components'

import { PageHeader } from '@layouts/PageHeader/style'

export const RoutineWrapper = css`
  background-color: ${({ theme }) => theme.pointBg};
`

export const EmptyContent = styled.div`
  margin: 4px 0;
  gap: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p.description {
    font-size: 14px;
    font-weight: 200;
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.textInfo};
  }
  .exam-title {
    margin-top: 10px;

    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    color: ${({ theme }) => theme.point};
  }
  .exam-content {
    width: 245px;
    padding: 12px;

    border: solid 2px ${({ theme }) => theme.point2};
    background-color: ${({ theme }) => theme.point3};
    border-radius: 7px;

    pointer-events: none;
    ul {
      li {
        span {
          font-size: 14px;
        }
        button.more {
          display: none;
        }
      }
    }
  }
`

export { PageHeader }
