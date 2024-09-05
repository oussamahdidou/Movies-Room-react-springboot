import React from 'react'
import "./CreditCard.css"
import { CastMember, CrewMember } from '../../Interfaces/Movie'
import { ImageLink } from '../../Helpers/imageLink'
interface Member {
    cast:CastMember|null,
    crew:CrewMember|null
}

const CreditCard = (member: Member) => {
  if (member.cast) {
  const  profileimg= member.cast.profile_path ? `${ImageLink}${member.cast.profile_path}` : `${process.env.PUBLIC_URL + "/img/blankuser.avif"}`

    return (
    <div className="mx-3">
        <div className='profile' >
            <img src={profileimg} alt="" />
        </div>
        <p className='text-white text-center actor-name' >{member.cast.name||member.cast.original_name}</p>
    </div>
  )
  }
  else if (member.crew) {
      const  profileimg= member.crew.profile_path ? `${ImageLink}${member.crew.profile_path}` : `${process.env.PUBLIC_URL + "/img/blankuser.avif"}`

    return (
    <div className="mx-3">
        <div className='profile' >
            <img src={profileimg} alt="" />
        </div>
        <p className='text-white text-center actor-name' >{member.crew.name||member.crew.original_name}</p>
    </div>
  )
    
  }
  else{
   return (<div></div>)
  }
}

export default CreditCard