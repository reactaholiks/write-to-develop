import { Link } from "react-router-dom"

const BottomHeader = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#e0e0e0",
          alignItems: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8vw",
            justifyContent: "center",
          }}>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Services</h4>
          <h4>Shop</h4>
          <h4>
            <Link to="/contact"> Contact </Link>
          </h4>
        </div>
      </div>
    </>
  )
}

export default BottomHeader
