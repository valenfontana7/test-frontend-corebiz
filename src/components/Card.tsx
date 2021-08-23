import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'
interface CardProps {
  item: {
    imageUrl: string
    productName: string
    productId: number
    stars: number
    listPrice: number | null
    price: number | null
  }
}

function Card({ item }: CardProps) {
  return (
    <div
      onMouseOver={() => {
        document.getElementById(`buybtn-${item.productId}`).style.opacity = '1'
      }}
      onMouseLeave={() => {
        document.getElementById(`buybtn-${item.productId}`).style.opacity = '0'
      }}
      className="Card"
    >
      <img className="Card__img" src={item.imageUrl} alt="item" />
      <div className="Card__info">
        <p className="Card__name">{item.productName}</p>
        <Rating
          name="customized-empty"
          defaultValue={item.stars}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          readOnly
        />
        <p className="Card__listPrice">
          {item.listPrice &&
            `de ${new Intl.NumberFormat('es-AR', {
              style: 'currency',
              currency: 'ARS',
            }).format(item.listPrice)}`}
        </p>
        <p className="Card__price">
          {item.price &&
            `por ${new Intl.NumberFormat('es-AR', {
              style: 'currency',
              currency: 'ARS',
            }).format(item.price)}`}
        </p>
      </div>
      <button
        onClick={() => {
          if (localStorage.getItem('cartQty')) {
            localStorage.setItem(
              'cartQty',
              String(Number(localStorage.getItem('cartQty')) + 1)
            )
          } else {
            localStorage.setItem('cartQty', '1')
          }
          window.location.href = '/'
        }}
        id={`buybtn-${item.productId}`}
        className="Card__buyButton"
      >
        COMPRAR
      </button>
    </div>
  )
}

export default Card
