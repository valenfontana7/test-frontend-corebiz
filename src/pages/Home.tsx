import Header from '../utils/Header'
import Carousel from '../utils/Carousel'
import CardCarousel from '../utils/CardCarousel'
function Home() {
  return (
    <>
      <Header />
      <div className="carousel">
        <Carousel />
      </div>
      <main className="Home__main container1">
        <span className="Home__mainTitle">
          Más vendidos
          <span className="Home__titleUnderline"></span>
        </span>
        <CardCarousel />
      </main>
    </>
  )
}

export default Home
