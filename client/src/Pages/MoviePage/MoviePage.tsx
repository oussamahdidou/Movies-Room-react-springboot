import React, { useEffect, useState } from 'react';
import { DetailMovie } from '../../Interfaces/Movie';
import { MovieDetaill } from '../../api/api';
import { useParams } from 'react-router';
import { FaHeart, FaBookmark ,FaStar} from 'react-icons/fa';
import "./MoviePage.css"
import { formatDate } from '../../Helpers/Formatters';
type Props = {};

const MoviePage = (props: Props) => {
  const [movie, setMovie] = useState<DetailMovie | null>(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const FetchMovie = async () => {
      const response = await MovieDetaill(parseInt(id || "0"));
      console.log('response :', response);
      setMovie(response);
    };
    FetchMovie();
  }, [id]);
  const defaultPoster = `${process.env.PUBLIC_URL + "/img/defaultposter.png"}`; // Replace with the actual path to your default image

  const posterPath=(movie && movie.poster_path) ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:defaultPoster;
  
 
return (
 <div className="container-fluid mx-0 p-0 h-100">
    {movie && (
  
 <div className="container-fluid mx-0 px-0 h-100"> 
          <div
          className="container-fluid mx-0 px-0  poster-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          }}
        >
          <div className="container mx-auto row poster-img-container  pt-5">
          <div className="poster col-lg-4 mt-5">
            <img
              className="poster-img "
              src={posterPath} 
              alt={movie.title}
            />
          </div>
          <div className="col-lg-8  ">
            <h3 className="text-white movie-title">{movie.original_title||movie.title}</h3>
            <p className="text-white movie-overview" >{movie.overview}</p>
            <div className="d-flex justify-content-start align-items-center gap-3">
              <button className='py-2 px-4 movie-button' ><FaHeart size={24} color="rgb(5, 12, 29)" /> Favorites</button>
              <button className='py-2 px-4 movie-button' > <FaBookmark size={20} color="rgb(5, 12, 29)" /> WatchList</button>
            </div>
            <div className="d-flex justify-content-start align-items-center gap-3 py-3">
                  {
                    movie.genres.map(
                      item=>(
                       <div className='text-white options' key={item.id} >{item.name}</div>

                      )
                    )
                  }
                  <span className="line"></span>
                  <div className='text-white options' >{formatDate(movie.release_date)}</div>
                  <div className='text-white options text-center d-flex align-items-center' >{movie.vote_average}  <FaStar size={20} color="#FFD700" /></div>
                  {movie.adult &&   <div className='adult options text-white py-1 px-2 text-center'>18+</div>}

            </div>
          </div>
          </div>
        </div>
        <div className="container-fluid mx-0 px-0 movie-detail">
          igkgbkb
        </div>

</div>
     )}
  </div>
  );
};

export default MoviePage;
