import React from "react";

const initialState = {
  products: [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 },
  ],
  cart: [],
  cartSum: 0,
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
};

export default React.createContext(initialState);
