/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "./App.css"
import {
  ButtonStyles,
  ButtonWrapper,
  ContentWrapper,
  DescriptionStyles,
  TitleStyles,
} from "./AppStyles"
import Emmanuel from "./Component/Header"

function App(props) {
  const data = [
    {
      id: "add1",
      image:
        "https://media.istockphoto.com/id/1430886219/photo/designer-shows-color-palette-of-samples-of-different-colors-and-shades-closeup.jpg?s=1024x1024&w=is&k=20&c=7IdPXsdN4WiuaNCKzvw4vnyBX3O9Fvp2b1M-bwkPs-g=",
      title: "Product 1",
      description: "this is Ecommerce application",
      buttonValue: "Book Now",
    },
    {
      id: "add2",
      image:
        "https://media.istockphoto.com/id/1430886219/photo/designer-shows-color-palette-of-samples-of-different-colors-and-shades-closeup.jpg?s=1024x1024&w=is&k=20&c=7IdPXsdN4WiuaNCKzvw4vnyBX3O9Fvp2b1M-bwkPs-g=",
      title: "Product 2",
      description: "this is Ecommerce application",
      buttonValue: "Book Now",
      border: "1px solid red",
    },
    {
      id: "add3",
      image:
        "https://media.istockphoto.com/id/1430886219/photo/designer-shows-color-palette-of-samples-of-different-colors-and-shades-closeup.jpg?s=1024x1024&w=is&k=20&c=7IdPXsdN4WiuaNCKzvw4vnyBX3O9Fvp2b1M-bwkPs-g=",
      title: "Product 3",
      description: "this is Ecommerce application",
      buttonValue: "Book Now",
      border: "1px solid red",
    },
  ]

  const HeaderData = {
    items: [
      {
        logo: "Ecommerce",
        title: "FlipKart",
        cart: "CART",
      },
      {
        logo: "Ecommerce",
        title: "FlipKart",
        cart: "CART",
      },
      {
        logo: "Ecommerce",
        title: "FlipKart",
        cart: "CART",
      },
    ],
    navItems: [
      {
        navlogo: "./",
        navTitle: "NavBar",
      },
    ],
  }

 const SetItems = () => {
  let HeaderData = "this is header"
  return HeaderData
 }
 

  return (
    <>
      <Emmanuel SetItems={SetItems} />
      <div style={ContentWrapper}>
        {data?.map((item) => {
          return (
            <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src={item?.image}
                  alt="alt image"
                  height="100%"
                  width="100%"
                />
                <div>
                  <p style={TitleStyles}>{item?.title}</p>
                  <p style={DescriptionStyles}>{item?.description}</p>
                </div>

                <div style={ButtonWrapper}>
                  <button style={ButtonStyles}>{item?.buttonValue}</button>
                  <div>
                    <input
                      type="checkbox"
                      id={item?.id}
                      style={{ cursor: "pointer" }}
                    />
                    <label style={{ cursor: "pointer" }} htmlFor={item?.id}>
                      AddItem
                    </label>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      PAGE 2
    </>
  )
}
export default App
