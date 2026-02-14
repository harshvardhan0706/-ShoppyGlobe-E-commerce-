import { useDispatch } from 'react-redux';
import { removeItemFromCart, updateQuantity } from '../store/cartSlice';

/**
 * CartItem component - represents a single item in the cart
 * @param {object} item - Cart item data
 */
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItemFromCart(item.id));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="cart-item">
      <img 
        src={item.thumbnail} 
        alt={item.title}
        className="cart-item-image"
        loading="lazy"
      />
      
      <div className="cart-item-info">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price}</p>
      </div>
      
      <div className="cart-item-quantity">
        <button 
          className="quantity-btn"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          +
        </button>
      </div>
      
      <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
      
      <button 
        className="remove-btn"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
