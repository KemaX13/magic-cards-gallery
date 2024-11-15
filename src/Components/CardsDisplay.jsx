import Card from "./Card"

function CardsDisplay({ cardsArray }) {
  return (
    <>
      {cardsArray.map((card) => {
        const { id, name, type, text, imageUrl } = card;

        if (!imageUrl) return null;

        return (
          <Card key={id}
            card={{
              nameCard: name,
              typeCard: type,
              textCard: text,
              imgCard: imageUrl
            }}
          />
        );
      })}
    </>
  )
}

export default CardsDisplay