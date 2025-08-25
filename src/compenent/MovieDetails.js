import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails({ onClose }) {
    const { id: movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    const MovieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c82ab0405fb981cfd52454edfc40eb87`;

    useEffect(() => {
        fetch(MovieDetailsUrl)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(err => console.error(err));
    }, [movieId]);

    if (!movie) return <p>Loading...</p>;

    const handleClose = () => {
        onClose();
        navigate('/');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4  overflow-auto">
            <div className="bg-white rounded-lg shadow-xl  w-230 h-140 flex flex-col md:flex-row overflow-hidden">
                
                {/* Image du film */}
                <div className="w-full h-20 md:h-auto">
                    <img
                        className="w-full h-full cover"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>

                {/* Informations du film */}
                <div className="w-full  p-6 flex flex-col justify-between ">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
                        <p className="text-gray-700 mb-4">{movie.overview}</p>

                        <div className="flex flex-wrap gap-4 mb-4">
                            <p className="bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded">
                                ⭐ Rating: {movie.vote_average.toFixed(1)}
                            </p>
                            <p className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded">
                                Release Date: {movie.release_date}
                            </p>
                            <p className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded">
                                Language: {movie.original_language.toUpperCase()}
                            </p>
                            <p className="bg-purple-100 text-purple-800 font-semibold px-3 py-1 rounded">
                                Popularity: {movie.popularity.toFixed(1)}
                            </p>
                            <p className={`px-3 py-1 rounded font-semibold ${movie.adult ? 'bg-red-200 text-red-800' : 'bg-gray-200 text-gray-800'}`}>
                                Adult: {movie.adult ? 'Yes' : 'No'}
                            </p>
                        </div>

                        {/* Genres si disponibles */}
                        {movie.genres && movie.genres.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {movie.genres.map((genre) => (
                                    <span
                                        key={genre.id}
                                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold"
                                    >
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Bouton fermer */}
                    <div className="mt-4 md:mt-6 flex justify-end">
                        <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
