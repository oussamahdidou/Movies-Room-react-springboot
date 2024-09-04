import React from 'react'
import "./Card.css"
import { Movie } from '../../Interfaces/Movie'
import { ImageLink } from '../../Helpers/imageLink'


const Card = (movie: Movie) => {
  const defaultPoster = `${process.env.PUBLIC_URL + "/img/defaultposter.png"}`; // Replace with the actual path to your default image

const imageUrl = movie.poster_path ? `${ImageLink}${movie.poster_path}` : defaultPoster;

 
  
  return (

      <div className="card d-flex flex-column justify-content-center align-align-items-center ">
        <img src={imageUrl} alt={movie.title || movie.name} className="img-fluid" />
      </div>
   
  )
}

export default Card