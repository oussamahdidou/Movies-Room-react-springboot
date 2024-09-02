import axios from 'axios';
import { Movie } from '../Interfaces/Movie';

const apiKey = process.env.REACT_APP_API_KEY; // Make sure your .env file is correctly set up

export const TodayTrends = async (): Promise<Movie[]> => {
  try {
    console.log('API Key:', apiKey); // Log the API Key
    const response = await axios.get<any>(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=1`);
    console.log('API Response:', response.data);
    return response.data.results;
  } catch (error) {
    console.error('Error in TodayTrends:', error);
    return []; // Return an empty array on error
  }
}
