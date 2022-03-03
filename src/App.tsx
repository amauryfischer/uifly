import React from "react"
import logo from "./logo.svg"
import Home from "./pages/Home"
import Flex from "./utils/flex"
import GlobalStyle from "./utils/GlobalStyle"

function App() {
  return (
    <Flex gap="1rem">
      <GlobalStyle />
      <Home />
    </Flex>
  )
}

export default App
