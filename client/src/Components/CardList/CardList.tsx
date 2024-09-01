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

<div className="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>

  <input
    id="query"
    className="input"
    type="search"
    value={search}
    onChange={e=>setSearch(e.target.value)}
    placeholder="Search..."
    name="searchbar"
  />
</div>

    <div className="CardsList">

      {searchedCards.map(card => (
        <Card key={card.Id} {...card} />
      ))}
    </div>
    </div>
  )
}

export default CardList