import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  // console.log(cart);
  const addToCart = () => {
    //dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
