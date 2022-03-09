import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import ApplicationBar from "./pages/app/ApplicationBar"
import Router from "./pages/app/Router"
import GlobalStyle from "./utils/GlobalStyle"
import styled from "styled-components"

const theme = createTheme()

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
`

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApplicationBar />
        <PageContainer>
          <Router />
        </PageContainer>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
