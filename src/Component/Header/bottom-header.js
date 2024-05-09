import { Link } from "react-router-dom";

const BottomHeader = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f8f7f1",
          alignItems: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8vw",
            justifyContent: "center",
          }}>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Services</h3>
          <h3>Shop</h3>
          <h3 sx={{ margin: 0 }}>
            <Link to="/contact?ioi=kn&jhg=jhgv"> Contact </Link>
          </h3>
          <div>
            <div style={{ position: "fixed", paddingTop: "1vw" }}>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                alt="img-dlt"
                height="30px"
                width="30px"
              />
              <span
                style={{
                  position: "absolute",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "100%",
                  height: "18px",
                  width: "18px",
                  bottom: "20px",
                  left: "16px",
                  textAlign: "center",
                }}>
                {1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomHeader
