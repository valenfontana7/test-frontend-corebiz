import { useState } from 'react'
import Card from '../components/Card'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

interface CardCarouselProps {
  items: Array<{
    productName: string
    imageUrl: string
    productId: number
    stars: number
    listPrice: number | null
    price: number | null
  }>
}

const CardCarousel = ({ items }: CardCarouselProps) => {
  const [currentImageIdx, setCurrentImagIdx] = useState(0)

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0

    const index = resetToVeryBack ? items.length - 1 : currentImageIdx - 1

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index)
  }

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === items.length - 1

    const index = resetIndex ? 0 : currentImageIdx + 1

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index)
  }

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = items.slice(
    currentImageIdx,
    currentImageIdx + 4
  )

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 4
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...items.slice(0, 4 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState

  return (
    <div className="CardCarousel">
      <button className="CardCarousel__backButton" onClick={prevSlide}>
        <KeyboardArrowLeftIcon />
      </button>
      {/* render images */}
      <ul className="CardCarousel__list">
        {imageSourcesToDisplay.map((item) => {
          console.log(item)
          return (
            <li className="CardCarousel__item" key={item.productId}>
              <Card item={item} />
            </li>
          )
        })}
      </ul>

      <button className="CardCarousel__nextButton" onClick={nextSlide}>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  )
}

export default CardCarousel
