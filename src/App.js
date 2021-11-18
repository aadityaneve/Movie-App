import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14dc73a4bd1abf7c14d4209c112b4496&page=1";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=14dc73a4bd1abf7c14d4209c112b4496&query=";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

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
                    movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </>
    );
}

export default App;
