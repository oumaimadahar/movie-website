import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from '../compenent/MovieList';
import MovieDetails from '../compenent/MovieDetails';

function Home({ searchQuery, showDetails, setShowDetails }) {

  const handleClose = () => {
    setShowDetails(false);
  };

  return (
    <div className="Home">
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={
              <MovieList 
                searchQuery={searchQuery} 
                setShowDetails={setShowDetails} 
              />
            } 
          />
          <Route 
            path="/movies/:id" 
            element={showDetails ? <MovieDetails onClose={handleClose} /> : null} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
