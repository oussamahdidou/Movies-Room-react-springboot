import React, { useEffect, useState } from 'react';
import { DetailMovie, Movie, MovieCredits, MovieTrailer } from '../../Interfaces/Movie';
import { GetMovieCredits, GetMovieTrailers, MovieDetaill, MoviesRecommandations, SimilarMovies } from '../../api/api';
import { useParams } from 'react-router';
import { FaHeart, FaBookmark ,FaStar} from 'react-icons/fa';
import "./MoviePage.css"
import { formatDate,truncateText } from '../../Helpers/Formatters';
import MovieHeader from '../../Components/MovieHeader/MovieHeader';
import CreditCards from '../../Components/CreditCards/CreditCards';
import MoviesCaroussel from '../../Components/MoviesCaroussel/MoviesCaroussel';
import YoutubeEmbed from '../../Components/YoutubeEmbed/YoutubeEmbed';
type Props = {};

const MoviePage = (props: Props) => {
  const [movie, setMovie] = useState<DetailMovie | null>(null);
  const [credits, setCredits] = useState<MovieCredits | null>(null);
  const [similar, setSimilar] = useState<Movie[]>([]);
  const [recommandations, setRecommandations] = useState<Movie[]>([]);
  const [trailers, setTrailers] = useState<MovieTrailer[]>([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const FetchMovie = async () => {
      const response = await MovieDetaill(parseInt(id || "0"));
      setMovie(response);
    };
    const FetchCredits = async () => {
      const reponse = await GetMovieCredits(parseInt(id || "0"));
      setCredits(reponse);
    }
    const FetchSimilarMovies = async () => {
            const reponse = await SimilarMovies(parseInt(id || "0"));
      setSimilar(reponse);
    }
    const FetchRecommandations = async () => {
            const reponse = await MoviesRecommandations(parseInt(id || "0"));
      setRecommandations(reponse);
    }
    const GetMoviesTrailers = async () => {
      const reponse = await GetMovieTrailers(parseInt(id || "0"));
      setTrailers(reponse);
      console.log(reponse);
      
    }
    GetMoviesTrailers()
    FetchRecommandations();
    FetchMovie();
    FetchCredits();
    FetchSimilarMovies();
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
<h2 className='titre text-white py-4' >Similar Movies</h2>
<MoviesCaroussel movies={similar}></MoviesCaroussel>
<h2 className='titre text-white py-4' >Movies Recommandations</h2>
<MoviesCaroussel movies={recommandations}></MoviesCaroussel>
<h2 className='titre text-white py-4' >Movies Trailers</h2>
<div className="row justify-content-start align-items-center">
{
  trailers.map(trailer=>(
  <div className="col-lg-4 px-2">
    <YoutubeEmbed videoId={trailer.key}></YoutubeEmbed>
  </div>
  ))
}

</div>
</div>
</div>
</div>
     )}
  </div>
  );
};

export default MoviePage;
