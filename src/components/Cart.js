import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, setCart, amountInCart, setAmountInCart }) => {
  const handleDelete = (cartItem) => {
    setCart(cart.filter((item) => item.product !== cartItem.product));
    setAmountInCart(amountInCart - 1);
  };

  const priceCheck = (cartItem) => {
    return cartItem.price * (cartItem.weight/1000);
  };

  let totalPrice = 0;

  return (
    <div className="container">
      
      <div className="shopping-cart">
        {amountInCart < 1 && (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p>Fill it up with our collection!</p>
            <Link to="/ShoppingCart/shop">Shop</Link>
          </div>
        )}

        {amountInCart > 0 && (
          <ul className="carts">
            {amountInCart < 2 && <h1>My cart ({amountInCart} product)</h1>}
            {amountInCart > 1 && <h1>My cart ({amountInCart} products)</h1>}
            {cart.map((cartItem) => {
              {totalPrice += priceCheck(cartItem)}
              return (
                <li key={nanoid()}>
                  <img src={cartItem.picUrl} />
                  <div className="cart-item-info">
                    <h3>Product: {cartItem.product}</h3>
                    <h3>Weight: {cartItem.weight} gr</h3>
                    <h3>Price: {priceCheck(cartItem)}₺</h3>

                    <button
                      onClick={() => handleDelete(cartItem)}
                      className="deleteBtn"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {amountInCart > 0 && (
      <div className="totalPrice">
        <h3>Total Price: {totalPrice}₺</h3>
      </div>
      )}

    </div>
  );
};

export default Cart;