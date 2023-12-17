import { RuleSet, styled } from 'styled-components'

export const AccordionWrapper = styled.div<{ height: string }>`
  min-height: 60vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.pointBg};

  @media (min-width: 768px) {
    min-height: unset;
    height: ${({ height }) => height || '100vh'};
  }
`

export const AccordionItem = styled.section<{ $isOpened: boolean; $moreStyle: RuleSet<object> | undefined }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: ${({ $isOpened }) => ($isOpened ? 1 : 0)};

  transition: all 0.2s ease-in-out;
  ${({ $moreStyle }) => $moreStyle}
`

export const ItemHeader = styled.div`
  display: flex;
  padding: 5px 8px;
  .header-wrapper {
    flex-grow: 1;
  }
  .open-button {
    padding: 0;

    line-height: 0;

    background-color: unset;
    border: none;

    & > svg {
      width: 30px;
      height: 30px;

      transform: rotate(-90deg);
    }
    &.close > svg {
      transform: rotate(0);
    }
  }
`
export const ItemContent = styled.div<{ $isOpened: boolean }>`
  height: ${({ $isOpened }) => ($isOpened ? 'auto' : 0)};

  flex-grow: 1;

  overflow: hidden;
`
