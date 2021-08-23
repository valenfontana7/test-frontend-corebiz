import CardCarousel from '../utils/CardCarousel'
import { useEffect, useState } from 'react'

function Catalog() {
  const [items, setItems] = useState([])

  const fetchProducts = async () => {
    try {
      const products = await fetch(
        'https://corebiz-test.herokuapp.com/api/v1/products'
      ).then((response) => response.json())
      if (products) {
        setItems(products)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="Catalog">
      <CardCarousel items={items} />
    </div>
  )
}

export default Catalog
