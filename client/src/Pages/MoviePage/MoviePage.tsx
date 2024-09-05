import React, { useEffect, useState } from 'react';
import { DetailMovie, MovieCredits } from '../../Interfaces/Movie';
import { GetMovieCredits, MovieDetaill } from '../../api/api';
import { useParams } from 'react-router';
import { FaHeart, FaBookmark ,FaStar} from 'react-icons/fa';
import "./MoviePage.css"
import { formatDate,truncateText } from '../../Helpers/Formatters';
import MovieHeader from '../../Components/MovieHeader/MovieHeader';
import CreditCards from '../../Components/CreditCards/CreditCards';
type Props = {};

const MoviePage = (props: Props) => {
  const [movie, setMovie] = useState<DetailMovie | null>(null);
    const [credits, setCredits] = useState<MovieCredits | null>(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const FetchMovie = async () => {
      const response = await MovieDetaill(parseInt(id || "0"));
      console.log('response :', response);
      setMovie(response);
    };
    const FetchCredits = async () => {
      const reponse = await GetMovieCredits(parseInt(id || "0"));
      setCredits(reponse);
    }
    FetchMovie();
    FetchCredits();
  }, [id]);
  
return (
 <div className="container-fluid mx-0 p-0 h-100">
    {movie && (
  
 <div className="container-fluid mx-0 px-0 h-100"> 
<MovieHeader movie={movie}></MovieHeader>
<div className="container-fluid movie-detail py-5">
<div className="container mx-auto py-5">
 
<CreditCards 
  castmembers={credits?.cast || []} 
  crewmembers={credits?.crew || []}
/>
</div>
</div>
</div>
     )}
  </div>
  );
};

export default MoviePage;
