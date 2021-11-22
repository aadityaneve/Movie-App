import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import VideoPopup from "./components/VideoPopup";

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14dc73a4bd1abf7c14d4209c112b4496&page=1";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=14dc73a4bd1abf7c14d4209c112b4496&query=";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchTrailerId, setSearchTrailerId] = useState("");
    const [trailerKey, setTrailerKey] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);

    const getMovies = (API) => {
        axios
            .get(API)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const getTrailer = (searchTrailerId) => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${searchTrailerId}/videos?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US`)
            .then((response) => {
                setTrailerKey(response.data.results[0].key);
                return true;
            })
            .catch((error) => {
                alert(error.message)
                return false;
            })
    }

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchQuery) {
            getMovies(SEARCH_API + searchQuery);
            setSearchQuery("");
        }
    };

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <header>
                <form onSubmit={handleSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleOnChange}
                    />
                </form>
            </header>
            <div className="movieContainer">
                {movies.length > 0 &&
                    movies.map((movie) => <Movie key={movie.id} {...movie} setButtonPopup={setButtonPopup} setSearchTrailerId={setSearchTrailerId} />)}

                    {
                        (buttonPopup) ? (
                            <VideoPopup trigger={buttonPopup} setButtonPopup={setButtonPopup}>
                                {getTrailer(searchTrailerId)}
                                <iframe type="text/html" height="100%" width="100%"
                                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`} frameborder="0" allowfullscreen>
                                </iframe>
                            </VideoPopup>
                        ) : null
                    }
                
            </div>
        </>
    );
}

export default App;
