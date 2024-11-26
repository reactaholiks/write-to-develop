import React from "react"

export const ProductCard = (props) => {
  const { title, price, description, image } = props

  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          minHeight: "100px",
          width: "18vw",
          border: "1px solid black",
          textAlign: "start",
        }}>
        <img src={image} alt="img-dlt" height="100%" width="100%" />

        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </>
  )
}
