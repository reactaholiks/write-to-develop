import React from "react"
import "./App.css"
import headerData from "./Component/Header.json"
import Header from "./Component/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Component/Home"
import Contact from "./Component/contact"
import MainComponent from "./Component/MainComponent";

const App = () => {
  return (
    <>
     <MainComponent/>
    </>
  )
}

export default App
