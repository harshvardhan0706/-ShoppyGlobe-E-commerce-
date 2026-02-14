import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/productSlice';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';

/**
 * ProductList component - displays a list of products with search functionality
 * @returns {JSX.Element} - ProductList component
 */
const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useProducts();
  const searchQuery = useSelector((state) => state.products.searchQuery);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchQuery && (
          <button 
            className="clear-search-btn"
            onClick={() => dispatch(setSearchQuery(''))}
          >
            ×
          </button>
        )}
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <p>No products found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

