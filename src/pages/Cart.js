import React, { Component } from "react";
import MainNavigation from "../components/MainNavigation";
import "./Cart.css";
import ShopContext from "../context/shop-context";

export default class CartPage extends Component {
  static contextType = ShopContext;

  componentDidMount() {
    console.log(this.context);
  }
  render() {
    return (
      <React.Fragment>
        <MainNavigation
          cartItemNumber={this.context.cart.reduce(
            (count, curItem) => count + curItem.quantity,
            0
          )}
        />
        <main className="cart">
          {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.context.cart.map((cartItem) => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={this.context.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}