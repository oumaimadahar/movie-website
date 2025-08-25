import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function HeroCarousel() {
    const [movies, setMovies] = useState([]);
    const API_KEY = "c82ab0405fb981cfd52454edfc40eb87";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => setMovies(json.results.slice(0, 5))) // seulement 5 films
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="w-full h-[90vh] relative">
            <h1 className="text-3xl font-extrabold text-start m-3 text-gray-700 uppercase ">
                Tendances actuelles
            </h1>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000 }}
                className="h-full"
            >

                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div

                            className="w-full h-full bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                            }}
                        >
                            {/* overlay sombre */}
                            <div className="absolute inset-0 bg-black/60"></div>

                            {/* contenu */}
                            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-3xl text-white">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                                    {movie.title}
                                </h1>
                                <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-3">
                                    {movie.overview}
                                </p>

                                <div className="flex items-center gap-6 mb-6 text-gray-200">
                                    <span className="text-lg">
                                        ⭐ Rating: {movie.vote_average.toFixed(1)}+
                                    </span>
                                    <span className="text-lg">👁️ Views: {movie.vote_count}</span>
                                </div>


                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroCarousel;
