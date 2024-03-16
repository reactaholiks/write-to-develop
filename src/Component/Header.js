import React from "react"

export const Header = (props) => {
  const HeaderData = [
    {
      socialLogo:
        "https://cdn.pixabay.com/photo/2017/11/10/05/05/twitter-2935414_1280.png",
    },
    {
      socialLogo:
        "https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png",
    },
    {
      socialLogo:
        "https://www.iconpacks.net/icons/2/free-facebook-icon-2869-thumb.png",
    },
    {
      socialLogo:
        "https://i.pinimg.com/736x/40/e2/6b/40e26beab6a4049d7d52cee459a7dbb8.jpg",
    },
  ]
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
            // border: "1px solid green",
            display: "flex",
            alignItems: "center",
            gap: "10vw",
          }}>
          <div style={{ display: "flex", gap: "3vw" }}>
            {HeaderData.map((item, index) => {
              return (
                <>
                  <div
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
              src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
              alt="img-dlt"
              height="20px"
              width="20px"
            />
            <div>
              <p style={{ margin: 0, paddingBottom: "5px" }}>
                This is my location
              </p>
              <p style={{ margin: 0 }}>This is my City</p>
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
