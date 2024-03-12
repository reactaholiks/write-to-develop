// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.title}</h1>
//     </>
//   )
// }

import React, { Component } from "react";


class Header extends React.Component{
constructor(props){

}
  render(){
    return (
      <>
        <h1>{this.props.title}</h1>
      </>
    )
  }
}
export default Header
