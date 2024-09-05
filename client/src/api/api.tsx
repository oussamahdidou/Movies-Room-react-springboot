import axios from 'axios';
import { DetailMovie, Movie, MovieCredits, MovieTrailer } from '../Interfaces/Movie';

const apiKey = process.env.REACT_APP_API_KEY; 

export const TodayTrends = async (Periode:string): Promise<Movie[]> => {
  try {
    const response = await axios.get<any>(`https://api.themoviedb.org/3/trending/all/${Periode}?api_key=${apiKey}&page=1&include_adult=true`);
    return response.data.results;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return []; 
  }
}
export const SearchMovies = async (Query:string):Promise<Movie[]> => {
  try {
     const response = await axios.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${Query}&page=1&include_adult=true`);
    return response.data.results;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return []; 
  }
}
export const MovieDetaill = async (Id:number):Promise<DetailMovie|null> => {
  try {
     const response = await axios.get<any>(`https://api.themoviedb.org/3/movie/${Id}?api_key=${apiKey}`);

    return response.data;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return null; 
  }
}
export const GetMovieCredits = async (Id:number):Promise<MovieCredits|null> => {
  try {
     const response = await axios.get<any>(`https://api.themoviedb.org/3/movie/${Id}/credits?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return null; 
  }
}
export const GetMovieTrailers = async (Id:number):Promise<MovieTrailer[]> => {
  try {
     const response = await axios.get<any>(`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return []; 
  }
}
export const SimilarMovies = async (Id:number):Promise<Movie[]> => {
  try {
     const response = await axios.get<any>(`https://api.themoviedb.org/3/movie/${Id}/similar?api_key=${apiKey}&include_adult=true`);
    return response.data.results;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return []; 
  }
}
export const MoviesRecommandations = async (Id:number):Promise<Movie[]> => {
  try {
     const response = await axios.get<any>(`https://api.themoviedb.org/3/movie/${Id}/recommendations?api_key=${apiKey}&include_adult=true`);
    return response.data.results;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return []; 
  }
}