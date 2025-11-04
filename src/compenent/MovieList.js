// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const MovieList = ({ searchQuery, setShowDetails, setSelectedMovieId }) => {
//     const [movieList, setMovieList] = useState([]);
//     const API_KEY = "c82ab0405fb981cfd52454edfc40eb87";

//     const getMovies = () => {
//         let url = "";

//         if (searchQuery && searchQuery.trim() !== "") {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
//         } else {
//             url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
//         }

//         fetch(url)
//             .then(res => res.json())
//             .then(json => setMovieList(json.results || []))
//             .catch(err => console.error(err));
//     };

//     useEffect(() => {
//         getMovies();
//     }, [searchQuery]);

//     return (
//         <div className="pl-4 pr-4 pt-20 grid  grid-cols-4 gap-4 bg-gray-800 ">
//             {movieList.map((movie) => (
//                 <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                     <Link to={`/movies/${movie.id}`} onClick={() => setShowDetails(true)}>
//                         <img
//                             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                             alt={movie.title}
//                             className="w-full h-68 cover" />
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
//                         </div>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MovieList;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = ({ searchQuery, setShowDetails, setSelectedMovieId }) => {
    const [movieList, setMovieList] = useState([]);
    const API_KEY = "c82ab0405fb981cfd52454edfc40eb87";

    const getMovies = () => {
        let url = "";

        if (searchQuery && searchQuery.trim() !== "") {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
        } else {
            url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(json => setMovieList(json.results || []))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        getMovies();
    }, [searchQuery]);

    return (
        <div className="pl-4 pr-4 pt-20 grid gap-4 bg-gray-800 
                        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movieList.map((movie) => (
                <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/movies/${movie.id}`} onClick={() => setShowDetails(true)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-68 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
