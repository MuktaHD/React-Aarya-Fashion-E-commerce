import React from 'react';


const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating" style={{justifyContent:"center"}}>
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} style={{color: "gold",
            fontsize: "24px", 
            marginright: "2px"}}>&#9733;</span>
      ))}
      {halfStar && <span>&#9733;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index + fullStars + (halfStar ? 1 : 0)}  style={{color: "gold",
            fontsize: "24px", 
            marginright: "2px"}}>&#9734;</span>
      ))}
    </div>
  );
};

export default StarRating;
