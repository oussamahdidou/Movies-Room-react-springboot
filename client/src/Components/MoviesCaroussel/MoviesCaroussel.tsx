import React from 'react'
import { Movie } from '../../Interfaces/Movie';
import Slider from 'react-slick';
import Card from '../Card/Card';
import "./MoviesCaroussel.css"

interface Props  {
    movies:Movie[]
}

const MoviesCaroussel = (props: Props) => {
    const castsettings = {
    dots: false, // no dots
    infinite: props.movies.length > 5, // infinite scroll only when more than 5
    slidesToShow: Math.min(props.movies.length, 5),
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // variableWidth: true 
  };
  return (
<div>
    <div className="slider-container">
      <Slider {...castsettings}>
 {
props.movies.map(member=>(
 <div key={member.id}  className='d-flex justify-content-center mx-3 px-3 movie'>
          <Card {...member}></Card>
  </div>
))

        }
       
      </Slider>
    </div>
</div>
  )
}

export default MoviesCaroussel