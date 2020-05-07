import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --focus-gold: #ffbf47;
    --hover-rgba: rgba(255, 255, 255, 0.5);
  }

  html {
    font-size: 100%;
    font-family: ${props => props.theme.font.roboto};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background};
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }
`
