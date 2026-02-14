import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useProductDetail from '../hooks/useProductDetail';
import { addItemToCart } from '../store/cartSlice';

/**
 * ProductDetail component - shows detailed information about a selected product
 * @returns {JSX.Element} - ProductDetail component
 */
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useProductDetail(id);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart(product));
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/" className="back-link">Back to Products</Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Product not found</h2>
        <Link to="/" className="back-link">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-link">← Back to Products</Link>
      
      <div className="product-detail">
        <div className="product-detail-image">
          <img 
            src={product.thumbnail} 
            alt={product.title}
          />
        </div>
        
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          
          <div className="product-detail-meta">
            <span className="product-detail-price">${product.price}</span>
            <span className="product-detail-rating">★ {product.rating}</span>
            <span className="product-detail-stock">{product.stock} in stock</span>
          </div>
          
          <p className="product-detail-description">{product.description}</p>
          
          <div className="product-detail-specs">
            <h3>Specifications:</h3>
            <ul>
              <li>Brand: {product.brand}</li>
              <li>Category: {product.category}</li>
              {product.sku && <li>SKU: {product.sku}</li>}
            </ul>
          </div>
          
          <button 
            className="add-to-cart-btn-large"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
