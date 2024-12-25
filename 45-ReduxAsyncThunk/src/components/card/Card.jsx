import React from "react";
import "./Card.css";
const Card = ({ product }) => {
  return (
    <div className="card">
      <i class="fa-regular fa-heart"></i>
      <img src={product.thumbnail} alt="" />
      <div className="products-container">
        <p>{product.title.slice(0, 20) + "..."}</p>

        <p>{product.category}</p>
        <p>${product.price}</p>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default Card;
