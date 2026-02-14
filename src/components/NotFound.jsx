import { Link } from 'react-router-dom';

/**
 * NotFound component - displays 404 error page
 * @returns {JSX.Element} - NotFound component
 */
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-details">
          <p>Error Details:</p>
          <ul>
            <li>Error Code: 404</li>
            <li>Status: Not Found</li>
            <li>Message: The requested resource could not be found on this server.</li>
          </ul>
        </div>
        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
