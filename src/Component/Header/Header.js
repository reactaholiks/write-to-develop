import React, { useState } from "react"

export const Header = (props) => {
  const { counter, headerData, contactData } = props
  console.log("contactData", contactData)

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
            gap: "3vw",
          }}>
          <div style={{ display: "flex", gap: "1.4vw" }}>
            {headerData?.map((item, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      handleHover(item?.socialURL)
                    }}
                    style={{
                      backgroundColor: "#f8f7f1",
                      height: "45px",
                      width: "45px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}>
                    <img
                      style={{ cursor: "pointer", objectFit: "contain" }}
                      src={item?.socialLogo}
                      alt="img-dlt"
                      height="14px"
                      width="14px"
                    />
                  </div>
                </>
              )
            })}
          </div>

            
          {contactData?.map((item ,index) => {
            return (
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.6vw" }}>
                <img
                  onClick={() => {
                    handleLocationClick()
                  }}
                  src={item?.appIcon}
                  alt="img-dlt"
                  height="25px"
                  width="25px"
                  sx={{
                    objectFit: "objectFit",
                  }}
                />

                <div>
                  <p style={{ margin: 0, paddingBottom: "5px" }}>
                    {item?.appTitle}
                  </p>
                  <p style={{ margin: 0 }}>{item?.contactDetail}</p>
                </div>
                {index != 0 && <hr style={{ height: "4vw" }} />}
              </div>
            )
         
          })}

         
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
