import React from 'react'
import thankyou from "../../../assets/svg/submitting.png";
import './ThankYou.scss';
import { Link } from 'react-router-dom';
const Thankyou = () => {
  return (
    <div className="submitting">
      <img  className="thankImage" src={thankyou} alt="" />
      <span className="submit-container">Thanks for submitting !</span>
      <span className="message"> Our Team will connect you</span>
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  )
}

export default Thankyou

 
 
