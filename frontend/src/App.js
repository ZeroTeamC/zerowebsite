import React, { useState } from 'react';
import './App.css';
import AppHead from './AppHead.js';
import Main_page from './pages/Main_page.js';
import Works from './pages/Works.js';
import Accounts from './pages/Accounts.js';

function App() {
  const [currentPage, setCurrentPage] = useState('main'); 

  const handleMenuItemClick = (pageName) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <Main_page />;
      case 'works':
        return <Works />;
      case 'accounts':
        return <Accounts/>;
      default:
        return <Main_page />;
    }
  };

  return (
    <div>
      <AppHead onItemClick={handleMenuItemClick} />
      <div className="mainBody">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
