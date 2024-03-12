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
          {SetItems()}
        </h1>
        <p style={{ fontSize: "30px", fontWeight: 600, paddingRight: "40px" }}>
          |||
        </p>
      </div>
    </>
  )
}

export default Header

// import React from "react";

// class Header extends React.Component{
//   render(){
//     return (
//       <>
//         <h1>{this.props.title}</h1>
//       </>
//     )
//   }
// }
