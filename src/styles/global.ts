import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body { 
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`