import React, { useEffect, useState } from 'react'
import './CardList.css'
import Card from '../Card/Card'
import { CardProps } from '../../Interfaces/CardProps'
import { SearchCards } from '../../api/api'


const CardList = (card: CardProps) => {
const [movies,setMovies]=useState<any[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
  // Add your search query if needed
      const results = await SearchCards(); // Call the SearchCards function
   setMovies(results) ;
 console.log(movies);
    };
fetchMovies();

  }, []);

  return (
<div>          
    <div className="CardsList">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi delectus beatae, mollitia inventore quidem, corporis voluptate, id illo eligendi quaerat provident ullam sequi quisquam reprehenderit ad repellat voluptates aspernatur.
    </div>
    </div>
  )
}

export default CardList