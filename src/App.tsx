import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import React from "react"
import logo from "./logo.svg"
import Home from "./pages/Home"
import Flex from "./utils/flex"
import GlobalStyle from "./utils/GlobalStyle"
const theme = createTheme()
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex gap="1rem">
        <GlobalStyle />
        <Home />
      </Flex>
    </ThemeProvider>
  )
}

export default App
