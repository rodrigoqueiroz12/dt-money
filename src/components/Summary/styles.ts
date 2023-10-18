import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
`

interface SummaryCardProps {
  $variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  min-width: 260px;

  @media screen and (max-width: 576px) {
    padding-inline: 2.28rem 1.71rem;
    padding-block: 1.71rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};

    span {
      @media screen and (max-width: 576px) {
        font-size: 1.14rem;
      }
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;

    @media screen and (max-width: 576px) {
      margin-top: 0.85rem;
      font-size: 1.71;
    }
  }

  ${(props) =>
    props.$variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`
