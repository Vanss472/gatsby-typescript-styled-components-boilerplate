// import original module declarations
import "styled-components"
import {} from "styled-components/cssprop"

// and extend them!
// DefaultTheme is being used as an interface of props.theme out of the box. By default the interface DefaultTheme is empty so that's why we need to extend it.
declare module "styled-components" {
  export interface DefaultTheme {
    border: {
      borderColor: string
      borderRadius: string
    }

    font: {
      roboto: string
    }

    colors: {
      main: string
      secondary: string
      background: string
    }

    transition: {
      primary: string
      transform: string
    }
  }
}
