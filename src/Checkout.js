import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [state, dispatch] = useContext(StateContext);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2>Hey {state.user?.email}</h2>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {state.basket.map((el) => (
            <CheckoutProduct {...el} />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
