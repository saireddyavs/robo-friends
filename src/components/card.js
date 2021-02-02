import React from "react";
import "./card.css";

const Card = ({
  name = "sai",
  city = "Hydeejkrewkgrkwegrrabad",
  id = "sai",
}) => {
  return (
    <div className="topmostwrapper">
      <div className="wrapper grow dib">
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
          <a href="https://www.google.com/" className="fb grow">
            <i className="fab fa-facebook-f grow"></i>
          </a>
          <a href="https://www.google.com/" className="twitter grow">
            <i className="fab fa-twitter grow"></i>
          </a>
          <a href="https://www.google.com/" className="insta grow">
            <i className="fab fa-instagram grow"></i>
          </a>
        </div>

        <div className="social-share">
          <div className="row grow">
            <i className="far fa-heart"></i>
            <i className="icon-2 fas fa-heart"></i>
            <span>20.4k</span>
          </div>
          <div className="row grow">
            <i className="far fa-comment"></i>
            <i className="icon-2 fas fa-comment"></i>
            <span>14.3k</span>
          </div>
          <div className="row grow">
            <i className="fas fa-share"></i>
            <span>12.8k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
