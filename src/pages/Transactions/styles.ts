import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 576px) {
    margin: 1rem auto 0;
  }
`

export const TransactionTitle = styled.div`
  @media screen and (min-width: 576px) {
    display: none;
  }

  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    line-height: 1.6;

    &:first-child {
      font-size: 1.28rem;
      color: ${(props) => props.theme['gray-300']};
    }

    &:last-child {
      font-size: 1.14rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 12px;
    border-collapse: unset;
    border-spacing: 0;

    tbody {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    tr {
      display: block;
      background-color: ${(props) => props.theme['gray-700']};
      padding: 1.42rem;
      border-radius: 6px;
    }

    td {
      padding: 0;
      display: block;
      background-color: transparent;
      line-height: 1.6;

      &:nth-child(1) {
        width: 100%;
        font-size: 1.14rem;
        color: ${(props) => props.theme['gray-300']};
        margin-bottom: 4px;
      }

      &:nth-child(2) {
        font-size: 1.42rem;
        font-weight: 700;
        margin-bottom: 12px;
      }

      &:is(:nth-child(3), :nth-child(4)) {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 1.14rem;
        width: 50%;
        font-weight: 400;
        color: ${(props) => props.theme['gray-500']};

        svg {
          width: 16px;
          height: 16px;
        }
      }

      &:nth-child(4) {
        justify-content: flex-end;
      }
    }
  }

  @media screen and (min-width: 769px) {
    svg {
      display: none;
    }
  }
`

interface PriceHighlightProps {
  $variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.$variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    margin-top: 32px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  li {
    line-height: 0;

    &:nth-child(2) {
      display: flex;
      gap: 8px;

      button {
        color: ${(props) => props.theme['gray-300']};
        background-color: ${(props) => props.theme['gray-600']};

        &[data-active='true'] {
          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme['green-700']};
        }
      }
    }
  }

  button {
    all: unset;

    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    line-height: 1.4;
    font-weight: 700;
    font-size: 1rem;

    border-radius: 6px;

    cursor: pointer;

    &:disabled {
      cursor: not-allowed;

      svg {
        color: ${(props) => props.theme['gray-600']};
      }
    }

    svg {
      height: 24px;
      width: 24px;
      color: ${(props) => props.theme['green-500']};
    }
  }
`
