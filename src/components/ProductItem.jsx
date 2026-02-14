import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../store/cartSlice';

/**
 * ProductItem component - represents a single product
 * @param {object} product - Product data
 * @returns {JSX.Element} - ProductItem component
 */
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={product.thumbnail} 
            alt={product.title}
            className="product-image"
            loading="lazy"
          />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-meta">
            <span className="product-price">${product.price}</span>
            <span className="product-rating">★ {product.rating}</span>
          </div>
        </div>
      </Link>
      <button 
        className="add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
