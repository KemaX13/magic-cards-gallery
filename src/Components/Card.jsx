

function Card({ card: { nameCard, typeCard, setNameCard, textCard, artistCard, imgCard } }) {
  return (
    <section className='card'>
      <div className='img'><img src={imgCard} alt={nameCard} /></div>
      <div className='product-card'>
        <h2 className='product-cardName'>{nameCard}</h2>
        <h3>Type</h3>
        <p className='product-typeCard'>{typeCard}</p>
        <h3>Description</h3>
        <p className='product-textCard'>{textCard}</p>
      </div>
    </section>
  )
}

export default Card