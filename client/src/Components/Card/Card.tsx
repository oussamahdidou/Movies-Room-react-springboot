import React from 'react'
import "./Card.css"
import { CardProps } from '../../Interfaces/CardProps'


const Card = (props: CardProps) => {
  return (
  /* From Uiverse.io by Yaya12085 */ 
<div className="card">
      <div className="content">
        <div className="title">{props.Titre||"Titre"}</div>
        <div className="price">${props.Price}</div>
        <div className="description">{props.Description||"Description"}</div>
      </div>
        <button>
          Buy now
        </button>
  </div>
  )
}

export default Card