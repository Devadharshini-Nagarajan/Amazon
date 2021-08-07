import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [state, dispatch] = useContext(StateContext);
  const [valuee, setvaluee] = useState(0);

  useEffect(() => {
    let total = 0;
    state.basket.map((el) => {
      total = total + el.price;
    });
    setvaluee(total);
  }, [state.basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={valuee}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
