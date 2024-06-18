const About = () => {
  const list = [{ list: "home" }, { list: "about" }, { list: "contact" }]
  return (
    <>
      <h2 style={{ paddingTop: "80px" }}>This is about us page</h2>
      {list?.map((item, index) => {
        return <p key={index}>{item?.list}</p>
      })}
    </>
  )
}

export default About
