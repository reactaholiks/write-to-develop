import { Outlet } from "react-router-dom";



const Contact = () => {
    return (
      <>
        <div style={{
                paddingTop:"10vw"
        }} >
          <h1>Contact</h1>
          <Outlet/>
        </div>
      </>
    )
}
export default Contact

 export const Users = () => {
   return (
     <>
       <div>
         <h1>this is Users</h1>
       </div>
     </>
   )
 }

  export const Services = () => {
    return (
      <>
        <div>
          <h1>this is Services</h1>
        </div>
      </>
    )
  }