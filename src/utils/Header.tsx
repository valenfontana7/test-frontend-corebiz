import BurgerButton from './BurgerButton'
import SearchBarContainer from '../containers/SearchBarContainer'
import Badge from '../utils/Badge'
function Header() {
  return (
    <header className="Header">
      <div className="container1">
        <div className="Header__burgerButton">
          <BurgerButton />
        </div>
        <div className="Header__brandLogo">
          <img
            className="Header__brandImage"
            src="../assets/logo-corebiz-negro.svg"
            alt="brand"
          />
        </div>
        <div className="Header__searchBar">
          <SearchBarContainer />
        </div>
        <nav className="Header__navigation">
          <ul className="Header__navigationList">
            <li className="Header__navigationItem">
              <img src="../assets/user.svg" alt="profile" />
              <p>Mi Cuenta</p>
            </li>
            <li className="Header__navigationItem">
              <img src="../assets/shopping-cart.svg" alt="cart" />
              <Badge />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
