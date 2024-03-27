import React, { useState } from "react"
import "./App.css"
import headerData from "./Component/Header.json"
import Header from "./Component/Header"
import HeroBanner from "./Component/hero-banner"
import { ProductCard } from "./Component/product-card-component"
import ProductImage from "./Images/apple-product.png"

function App() {
  let [counter, setCounter] = useState(0)

  const value = {
    title: "apple",
    price: "$50.0",
    image: ProductImage,
    description: "this is apple",
  }

  return (
    <>
      <Header {...headerData} counter={counter} />
      <HeroBanner />

      <ProductCard {...value} />
    </>
  )
}

export default App
