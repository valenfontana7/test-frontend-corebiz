import Header from '../utils/Header'
import Carousel from '../utils/Carousel'
import Catalog from '../containers/Catalog'
import Footer from '../utils/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className="Carousel">
        <Carousel />
      </div>
      <main className="Home__main container1">
        <span className="Home__mainTitle">
          Más vendidos
          <span className="Home__titleUnderline"></span>
        </span>
        <Catalog />
      </main>
      <aside className="Newsletter"></aside>
      <Footer />
    </>
  )
}

export default Home
