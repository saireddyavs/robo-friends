import React from "react";
import "./card.css";

const Card = ({ name = "sai", city = "Hyderabad", id = "sai" }) => {
  return (
    <div className="wrapper grow">
      <div className="img-area grow">
        <div className="inner-area">
          <img
            src={`https://robohash.org/${id}?size=200x200`}
            alt="robots"
          ></img>
        </div>
      </div>

      <div className="name">{name}</div>
      <div className="about">{city}</div>
      <div className="social-icons">
        <a href="https://www.google.com/" className="fb">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.google.com/" className="twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.google.com/" className="insta">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="social-share">
        <div className="row">
          <i className="far fa-heart"></i>
          <i className="icon-2 fas fa-heart"></i>
          <span>20.4k</span>
        </div>
        <div className="row">
          <i className="far fa-comment"></i>
          <i className="icon-2 fas fa-comment"></i>
          <span>14.3k</span>
        </div>
        <div className="row">
          <i className="fas fa-share"></i>
          <span>12.8k</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
