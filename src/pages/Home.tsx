import Header from '../utils/Header'
import Carousel from '../utils/Carousel'
import CardCarouselContainer from '../containers/CardCarouselContainer'
import Footer from '../utils/Footer'
import NewsletterContainer from '../containers/NewsletterContainer'

function Home() {
  return (
    <>
      <Header />
      <div className="Carousel">
        <Carousel />
      </div>
      <main className="Home__main container1">
        <span className="Home__mainTitle">
          <h2>Más vendidos</h2>
          <span className="Home__titleUnderline"></span>
        </span>
        <CardCarouselContainer />
      </main>
      <NewsletterContainer />
      <Footer />
    </>
  )
}

export default Home
