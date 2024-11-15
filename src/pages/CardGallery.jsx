import { useEffect } from "react";
import { useState } from "react";
import { getAllCards } from "../services/ApiCardsService";
import CardsDisplay from '../Components/CardsDisplay'

const CardGallery = () => {
  const [cards, setCards] = useState([]);

  const getAllCardsFromService = async () => {
    const response = await getAllCards();
    setCards(response)
  }

  useEffect(() => {
    getAllCardsFromService()
  }, [])

  return (
    <main className="main">
      <div className="titleDiv"><h1 className="title">Cartas</h1></div>
      <section className="cardsList"><CardsDisplay cardsArray={cards}/></section>
    </main>
  )
}

export default CardGallery