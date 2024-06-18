import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const Contact = () => {
  
  const {id,name} = useParams()

  const QueryParmas = useLocation()

  let Queryparmas =  new URLSearchParams(QueryParmas?.search)
    let postValue = Queryparmas?.get("post")
    let categorie = Queryparmas?.get("categorie")
  return (
    <>
      <div
        style={{
          paddingTop: "90px",
        }}>
        <button>
          <Link to="users">Users</Link>
        </button>
        <button>
          <Link to="services">Services</Link>
        </button>

        <h1>Contact</h1>
        <p>{id}</p>
        <p>{name}</p>
        <p>this is:{postValue}</p>
        <p>this is:{categorie}</p>
        <Outlet />
      </div>
    </>
  )
}
export default Contact

export const Users = () => {
  return (
    <>
      <div>
        <h1>You are a current Users</h1>
      </div>
    </>
  )
}

export const Services = () => {
  return (
    <>
      <div>
        <h1>Thanks for your Services</h1>
      </div>
    </>
  )
}
