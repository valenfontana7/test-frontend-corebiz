function SearchBarComponent() {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar__input"
        placeholder="¿Qué estás buscando?"
        type="text"
      />
      <button className="SearchBar__button" type="button">
        <img
          className="SearchBar__buttonImage"
          src="../assets/lupa.svg"
          alt="search-button"
        />
      </button>
    </div>
  )
}

export default SearchBarComponent
