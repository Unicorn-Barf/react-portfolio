import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
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
  }

  return (
    <div className="App">
      <Header />
      {/* Conditional Rendering of the Main content */}
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
