import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
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
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  // State Change Function to Change Page
  const pageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} pageChange={pageChange} />
      {/* Conditional Rendering of the Main content */}
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
