import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100v;
  inset: 0;
  background-color: #00000075;
`

export const Content = styled(Dialog.Content)`
  width: min(100%, 32rem);
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      @media screen and (max-width: 576px) {
        padding: 1.14rem;
        font-size: 1.14rem;
      }
    }

    button[type='submit'] {
      border: 0;
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: 700;
      padding: 1rem 2rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      line-height: 1.6;
      font-size: 1rem;
      font-style: normal;

      &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: background-color 200ms;
      }

      @media screen and (max-width: 576px) {
        font-size: 1.14rem;
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 1.71rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    top: unset;

    translate: -50% 0;
    bottom: 0;
  }
`

export const Title = styled(Dialog.Title)`
  @media screen and (max-width: 576px) {
    font-size: 1.42rem;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  $variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  transition:
    color 200ms,
    background-color 200ms;

  svg {
    color: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  line-height: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;

  color: ${(props) => props.theme['gray-400']};
`
