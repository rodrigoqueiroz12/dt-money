import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (max-width: 576px) {
      font-size: 14px;
    }
  }

  :focus {
    outline: 0;
    box-sizing: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  body {
    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }
`
