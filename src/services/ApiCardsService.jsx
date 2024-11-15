import axios from "axios";

const apiCardsUrl = "https://api.magicthegathering.io/v1/cards";

const getAllCards = async () => {
    const response = await axios.get(apiCardsUrl);
    return response.data.cards;
}

export {
    getAllCards,
}