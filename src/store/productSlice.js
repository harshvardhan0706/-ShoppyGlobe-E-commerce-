import { createSlice } from '@reduxjs/toolkit';

// Initial state for products
const initialState = {
  products: [],
  searchQuery: '',
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setProducts, setSearchQuery, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
