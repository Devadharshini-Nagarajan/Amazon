import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";

function CheckoutProduct({ id, image, price, title, rating }) {
  const [state, dispatch] = useContext(StateContext);
  const removefrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <button className="checkoutProduct_button" onClick={removefrombasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
