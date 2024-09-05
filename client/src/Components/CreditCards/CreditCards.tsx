import React from 'react'
import Slider from "react-slick";
import CreditCard from '../CreditCard/CreditCard';
import { CastMember, CrewMember } from '../../Interfaces/Movie';
interface Credits  {
  castmembers:CastMember[],
  crewmembers:CrewMember[]
}

const CreditCards = ({ castmembers, crewmembers }: Credits) => {
  const settings = {
dots: false, // no dots
    infinite: castmembers.length > 5, // infinite scroll only when more than 5

    slidesToShow: Math.min(castmembers.length, 5),
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
         // Align items to the left
    variableWidth: true 
  };
  return (
<div>
  <h2 className='titre text-white' >Credits</h2>
  <h3 className='titre text-white py-4' >Actors</h3>
    <div className="slider-container">
      <Slider {...settings}>
 {
castmembers.map(member=>(
 <div key={member.id} className='d-flex justify-content-center'>
          <CreditCard cast={member}></CreditCard>
  </div>
))

        }
       
      </Slider>
    </div>
</div>
  );
}

export default CreditCards