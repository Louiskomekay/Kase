//IMPORTS
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { Router } from './utils/Router'
import { useGlobalContext } from './context'

//THEMES STYLING
import { LightTheme, DarkTheme } from './utils/Themes'
import { ThemeWrapper } from './utils/ThemeWrapper'

const App = () => {
  const { theme } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === 'dark' ? LightTheme : DarkTheme}>
      <ThemeWrapper>
        <RouterProvider router={Router} />
      </ThemeWrapper>
    </ThemeProvider>
  )
}

export default App;

