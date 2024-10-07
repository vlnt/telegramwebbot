import React from "react";
import "./Cart.css";
import Button from "./Button";
function Cart({ cartItems, onAdd, onRemove, onCheckout}) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  console.log(cartItems)
  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span className="">Total Price: ${totalPrice.toFixed(2)}</span>
      <Button
        title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;