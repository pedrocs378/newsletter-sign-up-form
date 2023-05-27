import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.charcoalGray};
    -webkit-font-smooting: antialiased;
  }
  
  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  :focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
  }
`
