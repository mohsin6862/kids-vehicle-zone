
import React from 'react';
import logo from '../../assets/image/logo.png'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className="w-64 h-64 mb-8"
        src={logo}
        alt="404 Not Found"
      />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-8">Oops! The page you are looking for does not exist.</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleBackToHome}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;

