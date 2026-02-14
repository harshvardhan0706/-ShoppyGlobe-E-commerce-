import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { clearCart } from '../store/cartSlice';

/**
 * Checkout component - displays order form and summary
 */
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });
  
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate order placement
    setOrderPlaced(true);
    
    // Clear cart after order
    setTimeout(() => {
      dispatch(clearCart());
      navigate('/');
    }, 2000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <p>Add some products before checking out!</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-icon">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your order. You will be redirected to the home page...</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      
      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Enter your address"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="City"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
                placeholder="ZIP"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              placeholder="Enter your country"
            />
          </div>
          
          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
        
        <div className="order-summary">
          <h3>Order Summary</h3>
          
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="order-total">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
