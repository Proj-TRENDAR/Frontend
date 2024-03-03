import { styled } from 'styled-components'

export const PageHeader = styled.div`
  display: flex;
  align-items: center;

  & > .title-wrapper {
    gap: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    text-align: center;

    h1 {
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 700;
    }
  }
  & > .button-wrapper {
    width: 30px;
  }
`
