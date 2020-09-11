import React, { useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const [state, dispatch] = useContext(StateContext);
  useEffect(() => {
    // observer or listener
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
