import React, { useContext, useState } from "react";
import { StateContext } from "./StateProvider";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

import "./Payment.css";

function Payment() {
  const [state, dispatch] = useContext(StateContext);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const getTotal = () => {
    let total = 0;
    state.basket.map((el) => {
      total = total + el.price;
    });
    return total;
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    setProcessing(true)
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{state.basket.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{state.user?.email}</p>
            <p>123 sample address</p>
            <p>Bangalore </p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_items">
            <p>
              {state.basket.map((item) => (
                <CheckoutProduct {...item} />
              ))}
            </p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Section</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getTotal()}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
