import React, { useState } from "react"

export const Header = (props) => {

  const {counter, headerData} = props

  const [weather, setWeather] = useState(null)

  const handleHover = (props) => {
    window?.open(props)
  }

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleUpdate, error)
    } else {
      console.log("Geolocation not supported")
    }
  }

  const handleUpdate = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
      })
      .catch((error) => console.log(error))
    console.log("data==", error)
  }

  function error() {
    console.log("Unable to retrieve your location")
  }


  return (
    <>
      <div
        style={{
          background: "white",
          height: "10%",
          width: "100%",
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          gap: "10vw",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div>
          <img
            style={{ paddingLeft: "6vw" }}
            src="https://static.vecteezy.com/system/resources/previews/022/774/469/original/agriculture-logo-icon-symbol-illustration-design-template-vector.jpg"
            alt="img"
            height="50px"
            width="50px"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10vw",
          }}>
          <div style={{ display: "flex", gap: "3vw" }}>
            {headerData?.map((item, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      handleHover(item?.socialURL)
                    }}
                    style={{
                      backgroundColor: "#F8F7F0",
                      height: "45px",
                      width: "45px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}>
                    <img
                      style={{ cursor: "pointer" }}
                      src={item?.socialLogo}
                      alt="img-dlt"
                      height="20px"
                      width="20px"
                    />
                  </div>
                </>
              )
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <hr style={{ height: "4vw" }} />

            <img
              onClick={() => {
                handleLocationClick()
              }}
              src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
              alt="img-dlt"
              height="20px"
              width="20px"
            />

            <div>
              <p style={{ margin: 0, paddingBottom: "5px" }}>
                {weather?.address?.city}
              </p>
              <p style={{ margin: 0 }}>{weather?.address?.country}</p>
            </div>
          </div>

          <div>
            <div style={{ position: "fixed" }}>
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
                {counter}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

// import React from "react";

//  <div
//           style={{
//             height: "100%",
//             width: state ? "100%" : "0px",
//             position: "fixed",
//             zIndex: 1,
//             top: 0,
//             right: 0,
//             background: "linear-gradient(to right, #333 75%, red 25%)",
//             overflowX: "hidden",
//             transition: "all 1.2s ease",
//             paddingTop: "60px",
//           }}>
//           <div
//             onClick={handleOpen}
//             style={{
//               color: "white",
//               fontSize: "26px",
//               position: "absolute",
//               right: "4vw",
//               top: "4vw",
//               letterSpacing: "3px",
//               fontWeight: 800,
//               cursor: "pointer",
//             }}>
//             |||
//           </div>
//         </div>
//         <div
//           onClick={handleOpen}
//           style={{
//             color: state ? "white" : "black",
//             fontSize: "26px",
//             position: "absolute",
//             right: "4vw",
//             top: "2vw",
//             letterSpacing: "3px",
//             fontWeight: 800,
//             cursor: "pointer",
//           }}>
//           |||
//         </div>
