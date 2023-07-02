import React, { useState } from 'react';
import './Card.css';

/* const Card = ({ image, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  }; */

  const Card = ({image,text}) => {
    const handleReadMoreClick = (event) => {
      event.preventDefault();
      event.target.closest('.card-inner').style.transform = 'rotateY(180deg)';
    };
  
    const handleGoBackClick = (event) => {
      event.preventDefault();
      event.target.closest('.card-inner').style.transform = 'rotateY(0deg)';
    };
  

  return (
    <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src={image} alt="Card Image" />
        <div className="card-content">
          <h3 className="card-title">Card Title</h3>
          <p className="card-text"></p>
          <a href="#" className="button read-more" onClick={handleReadMoreClick}>
            Read More
          </a>
        </div>
      </div>
      <div className="card-back">
        <div className="card-content">
          <h3 className="card-title">Card Back Title</h3>
          <p className="card-text">{text}</p>
          <a href="#" className="button go-back" onClick={handleGoBackClick}>
            Go Back
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Card;