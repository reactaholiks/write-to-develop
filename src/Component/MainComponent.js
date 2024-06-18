import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import Home from "./Home"
import Contact, { Services, Users } from "./contact"
import headerData from "./Header/Header.json"
import BottomHeader from "./Header/bottom-header"
import HeroBanner from "./hero-banner"
import About from "./about";

const MainComponent = () => {

  const Errorhandle = () => {
    return (
      <>
        <h2 style={{ paddingTop: "80px" }}>404 </h2>
        <h2>This is 404</h2>
      </>
    )
}


  return (
    <>
      <BrowserRouter>
        <Header {...headerData} />
        <BottomHeader />
        <HeroBanner />
        <Routes>
          <Route exact path="/homepage" element={<Home />} />
          <Route path="contact/:id/:name" element={<Contact />}></Route>
          <Route path="aboutUs" element={<About />}></Route>
          <Route path="*" element={<Errorhandle />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainComponent
