import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  border: {
    borderColor: `black`,
    borderRadius: `5px`,
  },

  font: {
    roboto: `Roboto, sans-serif`,
  },

  colors: {
    main: `cyan`,
    secondary: `magenta`,
    background: `white`,
  },

  transition: {
    primary: `all .3s ease-in-out`,
    transform: `transform 0.7s ease-in-out`,
  },
}

export { theme }
