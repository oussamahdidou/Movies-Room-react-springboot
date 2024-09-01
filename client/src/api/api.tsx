import axios from 'axios';

export const SearchCards = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY; // Use the correct environment variable
    console.log('API Key:', apiKey); // Log the API Key
    const response = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
      },
    });
    console.log('API Response:', response.data); // Log the API response
    return response.data.results;
  } catch (error) {
    console.error('Error in SearchCards:', error);
    return []; // Return an empty array on error
  }
}
