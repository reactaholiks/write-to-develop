import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Contact from "./contact"
import headerData from "./Header.json"

const MainComponent = () => {
  return (
    <>
      <Header {...headerData} />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainComponent
