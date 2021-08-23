import { useState } from 'react'

const CardCarousel = () => {
  const images = [
    {
      petName: 'Kiko',
      ownerName: 'Kathlyn Zlata',
      aptNotes:
        'Kiko weist seit einigen Wochen übermäßigen Durst und Gewichtsverlust auf',
      aptDate: '2019-11-30 9:00',
    },
    {
      petName: 'Felix',
      ownerName: 'Francine Benet',
      aptNotes: 'Felix Frauchen kommt wegen der Laborergebnisse',
      aptDate: '2019-12-1 13:00',
    },
    {
      petName: 'Sami',
      ownerName: 'Maggie Rickland',
      aptNotes: 'Sami hat seltsame Gewohnheitsänderungen',
      aptDate: '2019-12-1 10:00',
    },
    {
      petName: 'Cosmo',
      ownerName: 'Jennifer Dawson',
      aptNotes:
        'Cosmos Frauchen möchte, dass wir nach arthritischen Zuständen suchen und eine Routineuntersuchung durchführen',
      aptDate: '2019-12-1 11:30',
    },
    {
      petName: 'Casper',
      ownerName: 'Dalania Devitto',
      aptNotes: 'Dieser Hund kommt zur Nagelpflege',
      aptDate: '2019-12-1 15:15',
    },
    {
      petName: 'Chip',
      ownerName: 'Jason Hemlock',
      aptNotes: 'Dieser Fisch hat einen weißen Fleck am Rücken',
      aptDate: '2019-12-1 8:45',
    },
    {
      petName: 'Tibbs',
      ownerName: 'Shad Cayden',
      aptNotes: 'Tibbs soll auf Allergien getestet werden',
      aptDate: '2019-12-2 13:30',
    },
    {
      petName: 'Stich',
      ownerName: 'Dennis Nicholback',
      aptNotes: 'Stich hat was am Magen und soll geimpft werden',
      aptDate: '2019-12-2 10:15',
    },
    {
      petName: 'Shadow',
      ownerName: 'Audry Topsy',
      aptNotes: 'Diese Katze hat ein rotes geschwollenes Auge',
      aptDate: '2019-12-2 15:00',
    },
    {
      petName: 'Nugget',
      ownerName: 'Darla Branson',
      aptNotes: 'Dieser kleine Fisch hat einen Ausschlag in der Bauchgegend',
      aptDate: '2019-12-2 9:00',
    },
  ]

  const [currentImageIdx, setCurrentImagIdx] = useState(0)

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index)
  }

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === images.length - 1

    const index = resetIndex ? 0 : currentImageIdx + 1

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index)
  }

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 4
  )

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 4
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...images.slice(0, 4 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState

  return (
    <div>
      <button onClick={prevSlide}>Prev</button>
      {/* render images */}
      {imageSourcesToDisplay.map((image, index) => {
        console.log(image)
        return (
          <>
            <p key={index} style={{ display: 'inline-block' }}>
              {image['petName']}
            </p>
          </>
        )
      })}
      <button onClick={nextSlide}>Next</button>
    </div>
  )
}

export default CardCarousel
