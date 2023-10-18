import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 576px) {
    gap: 8px;
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    @media screen and (max-width: 576px) {
      font-size: 1.14rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 0.875rem 2rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      transition:
        background-color 200ms,
        border-color 200ms,
        color 200ms;
    }

    @media screen and (max-width: 576px) {
      padding: 1.14rem;

      span {
        display: none;
      }

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`
