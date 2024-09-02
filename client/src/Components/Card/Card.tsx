import React from 'react'
import "./Card.css"
import { Movie } from '../../Interfaces/Movie'
import { ImageLink } from '../../Helpers/imageLink'


const Card = (movie: Movie) => {
 const imageUrl =`${ImageLink}${movie.poster_path}`
  
  return (

      <div className="card d-flex flex-column justify-content-center align-align-items-center ">
        <img src={imageUrl} alt={movie.title || movie.name} className="img-fluid" />
      </div>
   
  )
}

export default Card