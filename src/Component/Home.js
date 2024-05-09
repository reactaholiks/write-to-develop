import BottomHeader from "./Header/bottom-header"
import HeroBanner from "./hero-banner"

const Home = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "90px",
        }}>
        <BottomHeader />
      </div>
      <HeroBanner />
    </>
  )
}
export default Home
