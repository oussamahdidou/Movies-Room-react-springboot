import React, { useEffect, useState } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { TodayTrends } from '../../api/api';
import { Movie } from '../../Interfaces/Movie';
interface CardListProps {
  movies: Movie[];
}
const CardList = ({movies}:CardListProps) => {


  return (
      <div className="container row mx-auto justify-content-center align-items-center pb-4">
        {(() => {
          if (movies.length > 0) {
            return movies.map((movie) => (
              <div key={movie.id} className="col-lg-2 col-md-4 col-sm-6 p-2">
                <Card {...movie} />
              </div>
            ));
          } else {
            return <p className="text-center text-white">No results found</p>;
          }
        })()}
      </div>
  );
}

export default CardList;
