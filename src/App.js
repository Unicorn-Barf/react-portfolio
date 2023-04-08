import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import './App.css';

function App() {

  // Create state to navigate "Pages"
  const [currentPage, setCurrentPage] = useState('about');

  // Method that returns the correct component depending on the currentPage state
  const renderContent = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  // State Change Function to Change Page
  const pageChange = (page) => setCurrentPage(page);

  return (
    <div className="App" style={{ marginBottom: '50000px' }}>
      <Navbar className="navbar" currentPage={currentPage} pageChange={pageChange} style={{ marginBottom: 'offsetHeight' }}/>
      {/* Conditional Rendering of the Main content */}
      <div className='container'>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
