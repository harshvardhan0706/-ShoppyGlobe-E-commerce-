import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

/**
 * Cart component - displays items in the cart
 */
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to get started!</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      <div className="cart-header">
        <span>Product</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Action</span>
      </div>
      
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-summary-row">
          <span>Total Items:</span>
          <span>{totalQuantity}</span>
        </div>
        <div className="cart-summary-row total">
          <span>Total Amount:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
