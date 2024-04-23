import { styled } from 'styled-components'

export const GuideWrapper = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    margin: 10px 0;
    padding: 10px 20px 10px;
  }

  h1 {
    margin-bottom: 30px;

    color: ${({ theme }) => theme.pointHover};
    font-weight: bold;
  }
  h2 {
    margin-bottom: 20px;

    font-weight: bold;
  }
  h3 {
    margin-bottom: 10px;
  }
  b {
    padding: 4px 8px;
    margin: 2px;

    display: inline-block;

    color: #347e88;

    background-color: #ecf5f4;
    border-radius: 6px;
  }
  p {
    margin: 16px 0;
  }
`
export const FolderWrapper = styled.div`
  border-left: solid 3px ${({ theme }) => theme.pointHover};
  border-radius: 0;
`

export const ComponentWrapper = styled.div`
  border: solid 2px ${({ theme }) => theme.grayBtLight};
  border-radius: 16px;
`

export const ExampleWrapper = styled.div`
  border-top: solid 1px ${({ theme }) => theme.grayBtLight};
  & div {
    margin: 0;
    padding: 0;
  }

  & > div {
    margin: 10px 0;
    padding: 10px 20px 10px;
  }
`
