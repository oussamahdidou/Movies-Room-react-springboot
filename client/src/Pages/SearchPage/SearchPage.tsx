import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import { useLocation } from 'react-router'
import { Movie } from '../../Interfaces/Movie';
import { SearchMovies } from '../../api/api';
import CardList from '../../Components/CardList/CardList';
import './SearchPage.css'
interface Props {}

  const SearchPage = (props: Props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const [movies,setMovies]= useState<Movie[]>([])
useEffect(() => {
   const fetchMovies = async () => {
      const results = await SearchMovies(query||""); 
      setMovies(results);

    };
    fetchMovies();


}, [query])

  return (
    <div className='container-fluid m-0 p-0 search-container'>
        <Search></Search>
        <div className='container mx-auto py-5'>
          <h3 className='text-white search-header' >Search For Movies With "{query}"</h3>
        </div>
    <div className="">
            <CardList movies={movies}></CardList>
    </div>
    </div>
  )
}

export default SearchPage