import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 576px) {
    img {
      width: 117px;
    }
  }
`

export const NewTransactionButton = styled.button`
  all: unset;
  padding: 0.75rem 1.25rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  line-height: 1.6;
  border-radius: 6px;
  background-color: ${(props) => props.theme['green-500']};
  cursor: pointer;

  &:hover {
    transition: background-color 200ms;
    background-color: ${(props) => props.theme['green-700']};
  }

  @media screen and (max-width: 576px) {
    padding: 0.57rem 1.14rem;
    font-size: 1rem;
  }
`
