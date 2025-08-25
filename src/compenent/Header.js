import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';

function Header({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchQuery(inputValue); // envoie la recherche à App
  };

  return (
    <div className="header">
      <div className="h-16 bg-gray-300 bg-opacity-50 flex items-center justify-between px-4">
        <img className="h-10" src="/images/logo (1).png" alt="Logo" />

        {/* Navigation */}
        <ul className="flex items-center text-lg text-white gap-8">
          <li><a href="#accueil">Movies</a></li>
        </ul>

        {/* Recherche */}
        <div className="flex items-center gap-2">
          <input
            type='text'
            placeholder='Search here...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='px-4 py-1 outline-none border-none hidden lg:block rounded'
          />
          <button 
            className="text-white bg-gray-600 px-3 py-1 rounded hover:bg-gray-700"
            onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
