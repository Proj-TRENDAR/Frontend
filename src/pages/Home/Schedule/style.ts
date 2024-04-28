import { css, styled } from 'styled-components'

import { PageHeader } from '@layouts/PageHeader/style.ts'

export const ScheduleWrapper = css`
  background-color: ${({ theme }) => theme.point};
  border-radius: 16px 0 0 0;

  .section-title {
    margin: 18px 0;

    color: ${({ theme }) => theme.basicBg};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 12px 8px;
  margin-bottom: 8px;
  min-height: 219px;

  background-color: ${({ theme }) => theme.basicBg};
  border-radius: 6px;
`

export const EmptyContent = styled.div`
  p.description {
    padding: 10px 0;

    font-size: 14px;
    font-weight: 200;
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.textInfo};
  }
`

export { PageHeader }
