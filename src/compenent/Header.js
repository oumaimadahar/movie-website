// // import 'font-awesome/css/font-awesome.min.css';
// // import { useState } from 'react';

// // function Header({ setSearchQuery }) {
// //   const [inputValue, setInputValue] = useState("");

// //   const handleSearch = () => {
// //     setSearchQuery(inputValue); // envoie la recherche à App
// //   };

// //   return (
// //     <div className="header">
// //       <div className="h-16 bg-gray-300 bg-opacity-50 flex items-center justify-between px-4">
// //         <img className="h-10" src="/images/logo (1).png" alt="Logo" />

// //         {/* Navigation */}
// //         <ul className="flex items-center text-lg text-white gap-8">
// //           <li><a href="#accueil">Movies</a></li>
// //         </ul>

// //         {/* Recherche */}
// //         <div className="flex items-center gap-2">
// //           <input
// //             type='text'
// //             placeholder='Search here...'
// //             value={inputValue}
// //             onChange={(e) => setInputValue(e.target.value)}
// //             className='px-4 py-1 outline-none border-none hidden lg:block rounded'
// //           />
// //           <button 
// //             className="text-white bg-gray-600 px-3 py-1 rounded hover:bg-gray-700"
// //             onClick={handleSearch}>
// //             <i className="fa fa-search"></i>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;

// import 'font-awesome/css/font-awesome.min.css';
// import { useState } from 'react';

// function Header({ setSearchQuery }) {
//   const [inputValue, setInputValue] = useState("");
//   const [showInput, setShowInput] = useState(false);

//   const handleSearch = () => {
//     if (inputValue.trim() !== "") {
//       setSearchQuery(inputValue); // envoie la recherche à App
//     }
//   };

//   return (
//     <div className="header">
//       <div className="h-16 bg-gray-300 bg-opacity-50 flex items-center justify-between px-4">
//         {/* Logo */}
//         <img className="h-10" src="/images/logo (1).png" alt="Logo" />

//         {/* Recherche */}
//         <div className="flex items-center gap-2">
//           {/* Input visible uniquement si showInput est true ou sur desktop */}
//           <input
//             type="text"
//             placeholder="Search here..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={`px-4 py-1 outline-none border border-gray-400 rounded transition-all duration-300
//                         ${showInput ? 'block w-40 sm:w-64' : 'hidden sm:block'}`}
//             autoFocus={showInput}
//             onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//           />

//           {/* Bouton / icône */}
//           <button
//             className="text-white bg-gray-600 px-3 py-1 rounded hover:bg-gray-700"
//             onClick={() => {
//               if (window.innerWidth < 640) {
//                 // mobile : toggle input
//                 setShowInput(!showInput);
//               } else {
//                 handleSearch();
//               }
//             }}
//           >
//             <i className="fa fa-search"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import 'font-awesome/css/font-awesome.min.css';
import { useState, useEffect } from 'react';

function Header({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  // Effect pour envoyer automatiquement la recherche à chaque changement de l'input
  useEffect(() => {
    setSearchQuery(inputValue);
  }, [inputValue, setSearchQuery]);

  const handleLogoClick = () => {
    setSearchQuery(""); // réinitialise la recherche
    setInputValue("");  // vide l'input
    setShowInput(false); // cache input sur mobile
  };

  return (
    <div className="header">
      <div className="h-16 bg-gray-300 bg-opacity-50 flex items-center justify-between px-4">
        {/* Logo */}
        <img
          className="h-10 cursor-pointer"
          src="/images/logo (1).png"
          alt="Logo"
          onClick={handleLogoClick}
        />

        {/* Recherche */}
        <div className="flex items-center gap-2">
          {/* Input visible uniquement si showInput est true ou sur desktop */}
          <input
            type="text"
            placeholder="Search here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`px-4 py-1 outline-none border border-gray-400 rounded transition-all duration-300
                        ${showInput ? 'block w-40 sm:w-64' : 'hidden sm:block'}`}
            autoFocus={showInput}
          />

          {/* Bouton / icône */}
          <button
            className="text-white bg-gray-600 px-3 py-1 rounded hover:bg-gray-700"
            onClick={() => {
              if (window.innerWidth < 640) {
                // mobile : toggle input
                setShowInput(!showInput);
              }
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
