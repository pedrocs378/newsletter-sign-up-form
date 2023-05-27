import 'styled-components'

type Theme = typeof import('../styles/theme').theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
