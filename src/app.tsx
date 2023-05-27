import { ThemeProvider } from 'styled-components'

import { Home } from './pages/home'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Home />
    </ThemeProvider>
  )
}
