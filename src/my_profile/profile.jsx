import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
const Profile = (props) => {
  return (
    <>
      <div className='profile'>
        <h1>My Profile</h1>
        <img src={props.imgSrc} className='profile--pic'></img>
        <h3>I am a {props.profession}</h3>
        <div className='bio'>{props.bio}</div>
        <h3>Name :</h3>
        <p> {props.fullName}</p>
        <h3>Age :</h3>
        <p>23 years</p>
        <h3>Location :</h3>
        <p>Abidjan, Ivory Coast</p>
      </div>
    </>
  )
}
Profile.prototype = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}
export default Profile
