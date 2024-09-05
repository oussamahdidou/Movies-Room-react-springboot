import React from 'react'
import "./Card.css"
import { Movie } from '../../Interfaces/Movie'
import { ImageLink } from '../../Helpers/imageLink'
import { Link } from 'react-router-dom'


const Card = (movie: Movie) => {
  const defaultPoster = `${process.env.PUBLIC_URL + "/img/defaultposter.png"}`; // Replace with the actual path to your default image

const imageUrl = movie.poster_path ? `${ImageLink}${movie.poster_path}` : defaultPoster;

 
  
  return (

      <Link to={`/movie/${movie.id}`} className="card d-flex  justify-content-center align-align-items-center ">
        <img src={imageUrl} alt={movie.title || movie.name} className="img-fluid" />
      </Link>
   
  )
}

export default Card