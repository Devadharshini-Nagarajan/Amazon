import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  basket: [],
  user: null,
};

export const StateContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, payload] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      let index = state.basket.findIndex((el) => el.id === payload);
      if (index >= 0) newBasket.splice(index, 1);
      else console.log("no id found");
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
export default StateProvider;

// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

export const useStateValue = () => useContext(StateContext);
