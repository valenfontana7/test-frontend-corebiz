function NewsletterComponent() {
  return (
    <aside className="Newsletter">
      <h2 className="Newsletter__title">
        ¡Únete a nuestras novedades y promociones!
      </h2>
      <form className="Newsletter__form">
        <input className="Newsletter__input" type="text" />
        <input className="Newsletter__input" type="text" />
        <button className="Newsletter__submitBtn" type="submit">
          Suscribirme
        </button>
      </form>
    </aside>
  )
}

export default NewsletterComponent
