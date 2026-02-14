import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch product details by ID
 * @param {string|number} productId - The ID of the product
 */
const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (!productId) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  return { product, loading, error };
};

export default useProductDetail;
