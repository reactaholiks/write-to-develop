import React from "react"

export const Header = (props) => {
  console.log("props:", props)
  const { SetItems } = props

  return (
    <>
      <div
        style={{
          backgroundColor: "#ec5353",
          height: "7vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <h1 style={{ textAlign: "left", margin: "0px", padding: "35px" }}>
          {/* {SetItems()} */}
        </h1>

        <div style={{ display: "flex", gap: "10vw" }}>
          {SetItems?.items?.map((item) => {
            return (
              <>
                <p>{item.title}</p>
              </>
            )
          })}
        </div>
        <p style={{ fontSize: "30px", fontWeight: 600, paddingRight: "40px" }}>
          |||
        </p>
      </div>
    </>
  )
}

export default Header

// import React from "react";


