import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../store/productSlice';

/**
 * Custom hook to fetch products from the API
 * Uses Redux for state management
 * @returns {object} - products, loading, error state
 */
const useProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch('https://dummyjson.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        dispatch(setProducts(data.products));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    if (products.length === 0) {
      fetchProducts();
    }
  }, [dispatch, products.length]);

  return { products, loading, error };
};

export default useProducts;
