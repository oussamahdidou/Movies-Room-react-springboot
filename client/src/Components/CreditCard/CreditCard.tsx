import React from 'react'
import "./CreditCard.css"
import { CastMember } from '../../Interfaces/Movie'
import { ImageLink } from '../../Helpers/imageLink'
interface Member {
    cast:CastMember
}

const CreditCard = (props: Member) => {
   const  profileimg= props.cast.profile_path ? `${ImageLink}${props.cast.profile_path}` : `${process.env.PUBLIC_URL + "/img/blankuser.avif"}`
  return (
    <div className="mx-3">
        <div className='profile' >
            <img src={profileimg} alt="" />
        </div>
        <p className='text-white text-center actor-name' >{props.cast.name||props.cast.original_name}</p>
    </div>
  )
}

export default CreditCard