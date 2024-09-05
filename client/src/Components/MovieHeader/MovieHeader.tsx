import React from 'react'
import { DetailMovie } from '../../Interfaces/Movie'
import { FaHeart, FaBookmark, FaStar } from 'react-icons/fa';
import { truncateText, formatDate } from '../../Helpers/Formatters';
import "./MovieHeader.css"

interface Props  {
    movie:DetailMovie
}

const MovieHeader = (props: Props) => {
    const defaultPoster = `${process.env.PUBLIC_URL + "/img/defaultposter.png"}`; // Replace with the actual path to your default image

  const posterPath=(props.movie && props.movie.poster_path) ?`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`:defaultPoster;
  
 
  return (
           <div
          className="container-fluid mx-0 px-0  poster-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path})`,
          }}
        >
          <div className="container mx-auto row poster-img-container  pt-5">
          <div className="poster col-lg-4 mt-5">
            <img
              className="poster-img "
              src={posterPath} 
              alt={props.movie.title}
            />
          </div>
          <div className="d-flex flex-column justify-content-between  col-lg-8  py-5 ">
<div>
              <h3 className="text-white movie-title">{props.movie.original_title||props.movie.title}</h3>
            <p className="text-white movie-overview" >{truncateText(props.movie.overview,400)}</p>
</div>
      <div className="">
              <div className="d-flex justify-content-start align-items-center gap-3">
              <button className='py-2 px-4 movie-button' ><FaHeart size={24} color="rgb(5, 12, 29)" /> Favorites</button>
              <button className='py-2 px-4 movie-button' > <FaBookmark size={20} color="rgb(5, 12, 29)" /> WatchList</button>
            </div>
            <div className="d-flex justify-content-start align-items-center gap-3 py-3">
                  {
                    props.movie.genres.map(
                      item=>(
                       <div className='text-white options' key={item.id} >{item.name}</div>

                      )
                    )
                  }
                  <span className="line"></span>
                  <div className='text-white options' >{formatDate(props.movie.release_date)}</div>
                  <div className='text-white options text-center d-flex align-items-center' >{props.movie.vote_average}  <FaStar size={20} color="#FFD700" /></div>
                  {props.movie.adult &&   <div className='adult options text-white py-1 px-2 text-center'>18+</div>}

            </div>
        </div>
          </div>
          </div>
        </div>

  )
}

export default MovieHeader