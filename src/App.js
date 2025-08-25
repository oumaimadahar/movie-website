import './App.css';
import Header from './compenent/Header';
import HeroCarousel from './compenent/Main';
import Home from './Pages/Home';
import { useState } from "react";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showDetails, setShowDetails] = useState(false); // état global

    return (
        <div className="App">
            <Header setSearchQuery={setSearchQuery} />
            {!showDetails && <HeroCarousel />} {/* cacher le carrousel si on voit les détails */}
            <Home 
                searchQuery={searchQuery} 
                showDetails={showDetails} 
                setShowDetails={setShowDetails} 
            />
        </div>
    );
}

export default App;
