import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem.js';
import { closeModal } from '../../redux/Public/modalSlice.js';
import { clearCart } from '../../redux/Public/cartSlice.js';
import { UserActions } from '../../Admin/components/Helpers/UserListConstants.js';
// import toast from 'react-hot-toast';

// import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  useEffect(() => {}, []);

  const handleClear = () => {
    dispatch(clearCart());
    dispatch(closeModal({ action: UserActions.Close }));
  };

  const handleCheckout = async () => {
    // const stripe = await getStripe();
    // const response = await fetch('/api/stripe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(cartItems),
    // });
    // if (response.statusCode === 500) return;
    // const data = await response.json();
    // toast.loading('Redirecting...');
    // stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <div className="cart-heading">
          <button
            className="heading-cart"
            type="button"
            onClick={() => dispatch(closeModal({ action: UserActions.Close }))}
          >
            <AiOutlineLeft />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({amount} items)</span>
          </button>
          <button
            type="button"
            onClick={() => handleClear()}
            className="btn clear-btn"
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link to="/">
              <button
                type="button"
                onClick={() =>
                  dispatch(closeModal({ action: UserActions.Close }))
                }
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems &&
            cartItems?.map((item) => <CartItem key={item._id} item={item} />)}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${total}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
