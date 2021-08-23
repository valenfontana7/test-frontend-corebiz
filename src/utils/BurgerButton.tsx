import { MouseEventHandler } from 'react'

interface BurgerButtonProps {
  event?: MouseEventHandler
}

function BurgerButton({ event }: BurgerButtonProps) {
  return (
    <button onClick={event} type="button" className="burgerButton">
      <img
        className="burgerButton__image"
        src="../assets/burger-menu.svg"
        alt="menu-button"
      />
    </button>
  )
}

export default BurgerButton
