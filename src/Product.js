import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./Product.css";

import StarIcon from "@material-ui/icons/Star";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useContext(StateContext);
  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={id}>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <img className="product_img" src={image} />
        <button className="product_button" onClick={addtobasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
