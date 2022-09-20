import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const addHandler = useCallback(() => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  },[dispatch, id, name, price]);
  const removeHandler = useCallback(() => {
    dispatch(cartActions.removeFromCart(id));
  },[dispatch, id]);

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
