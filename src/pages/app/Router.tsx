import { Route, Routes } from "react-router-dom"
import Components from "../components/Components"
import Home from "../Home"

const Router = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  )
}

export default Router
