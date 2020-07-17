import React from "react";
import "./ProductCard.css";

const ProductCard = ({ imgSrc, cardTitle, cardText, urlText }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <button class="btn btn-primary">{urlText}</button>
      </div>
    </div>
  );
};

export default ProductCard;
