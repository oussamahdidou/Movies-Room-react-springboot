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
const [search, setSearch] = useState<string>('');

  // search cards based on the search value
  const searchedCards = cards.filter(card =>
    card.Titre.toLowerCase().includes(search.toLowerCase()) ||
    card.Description.toLowerCase().includes(search.toLowerCase())||
    card.Price.toString().toLowerCase().includes(search.toLowerCase())
  );

  return (
<div>          
  <input
        type="text"
        placeholder="Search cards..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    <div className="CardsList">

      {searchedCards.map(card => (
        <Card key={card.Id} {...card} />
      ))}
    </div>
    </div>
  )
}

export default CardList