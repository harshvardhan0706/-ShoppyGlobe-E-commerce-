# ShoppyGlobe - E-commerce Application

A modern e-commerce application built with React, Redux, and React Router.

## Features

- **Product Listing**: Browse products fetched from DummyJSON API
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add/remove products, adjust quantities
- **Search**: Filter products using the search functionality
- **Checkout**: Complete order with dummy form
- **Responsive Design**: Works on all screen sizes
- **Performance**: Lazy loading and code splitting implemented

## Tech Stack

- React 18 with Vite
- Redux Toolkit for state management
- React Router v6 for routing
- CSS for styling

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at http://localhost:5173

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
├── hooks/              # Custom hooks
│   ├── useProducts.js
│   └── useProductDetail.js
├── store/              # Redux store
│   ├── index.js
│   ├── cartSlice.js
│   └── productSlice.js
├── App.jsx             # Main app component
├── App.css             # App styles
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Component Structure

- **App**: Main component with routing setup
- **Header**: Navigation menu and cart icon
- **ProductList**: Displays all products with search
- **ProductItem**: Individual product card with add to cart
- **ProductDetail**: Detailed product view
- **Cart**: Shopping cart with quantity controls
- **CartItem**: Individual cart item
- **Checkout**: Order form and summary
- **NotFound**: 404 error page

## State Management

- **Redux** handles:
  - Cart items (add, remove, update quantity)
  - Product search query
  - Loading and error states

## API Integration

- Products fetched from: `https://dummyjson.com/products`
- Product details from: `https://dummyjson.com/products/{id}`

## GitHub Repository

https://github.com/harshvardhan0706/-ShoppyGlobe-E-commerce-

## License

MIT
