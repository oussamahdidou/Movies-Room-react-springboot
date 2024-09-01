import React, { useState } from 'react'
import './CardList.css'
import Card from '../Card/Card'
import { CardProps } from '../../Interfaces/CardProps'


const CardList = (card: CardProps) => {
  const [cards,setCards]=useState<CardProps[]>([
  {
    Id: 101,
    Titre: "Card Title 1",
    Description: "This is a description for card 1.",
    Price: 100
  },
  {
    Id: 102,
    Titre: "Card Title 2",
    Description: "This is a description for card 2.",
    Price: 150
  },
  {
    Id: 103,
    Titre: "Card Title 3",
    Description: "This is a description for card 3.",
    Price: 200
  },
  {
    Id: 104,
    Titre: "Card Title 4",
    Description: "This is a description for card 4.",
    Price: 250
  },
  {
    Id: 105,
    Titre: "Card Title 5",
    Description: "This is a description for card 5.",
    Price: 300
  },
  {
    Id: 106,
    Titre: "Card Title 6",
    Description: "This is a description for card 6.",
    Price: 350
  }
]
)
  return (
<div className="CardsList">
{cards.map(
  card=>(
    <Card Id={card.Id} Titre={card.Titre} Description={card.Description} Price={card.Price}></Card>
  )
)}

</div>
  )
}

export default CardList