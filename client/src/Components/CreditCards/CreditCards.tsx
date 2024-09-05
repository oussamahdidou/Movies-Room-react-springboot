import React from 'react'
import Slider from "react-slick";
import CreditCard from '../CreditCard/CreditCard';
import { CastMember, CrewMember } from '../../Interfaces/Movie';
interface Credits  {
  castmembers:CastMember[],
  crewmembers:CrewMember[]
}

const CreditCards = ({ castmembers, crewmembers }: Credits) => {
  const castsettings = {
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
    const crewsettings = {
dots: false, // no dots
    infinite: crewmembers.length > 5, // infinite scroll only when more than 5

    slidesToShow: Math.min(crewmembers.length, 5),
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true 
  };
  return (
<div>
  <h2 className='titre text-white' >Credits</h2>
  <h3 className='titre text-white py-4' >Actors</h3>
    <div className="slider-container">
      <Slider {...castsettings}>
 {
castmembers.map(member=>(
 <div key={member.id} className='d-flex justify-content-center'>
          <CreditCard cast={member} crew={null}></CreditCard>
  </div>
))

        }
       
      </Slider>
    </div>
      <h3 className='titre text-white py-4' >Crew</h3>
    <div className="slider-container">
      <Slider {...crewsettings}>
 {
 crewmembers.map(member=>(
 <div key={member.id} className='d-flex justify-content-center'>
          <CreditCard crew={member} cast={null}></CreditCard>
  </div>
))

        }
       
      </Slider>
    </div>
</div>
  );
}

export default CreditCards