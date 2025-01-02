import React, { useState } from 'react';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import './App.css';  // Import your CSS for styling

const App = () => {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      {/* Navigation Buttons */}
      <div className="navigation">
        <button onClick={() => handlePageChange('admin')}>Admin</button>
        <button onClick={() => handlePageChange('user')}>User</button>
      </div>

      {/* Dynamic Heading */}
      <div className="page-heading">
        <h1>{currentPage === 'admin' ? 'ADMIN PAGE' : currentPage === 'user' ? 'USER PAGE' : 'WELCOME TO COMMUNICATION TRACKER'}</h1>
      </div>

      {/* Conditional Rendering of Pages */}
      {currentPage === 'admin' && <AdminPage />}
      {currentPage === 'user' && <UserPage />}
    </div>
  );
};

export default App;
