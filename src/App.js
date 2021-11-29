import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import VideoPopup from "./components/VideoPopup";

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14dc73a4bd1abf7c14d4209c112b4496&page=";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=14dc73a4bd1abf7c14d4209c112b4496&query=";
const POPULAR_API =
    "https://api.themoviedb.org/3/movie/popular?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US&page=";
const NOW_PLAYING =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US&page=";
const TOP_RATED_API =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US&page=";
const UPCOMING_API =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US&page=";

function App() {
    const [movies, setMovies] = useState([]);
    const [API, setAPI] = useState(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14dc73a4bd1abf7c14d4209c112b4496&page="
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [searchTrailerId, setSearchTrailerId] = useState("");
    const [trailerKey, setTrailerKey] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);
    const [page, setPage] = useState(1);
    const [searchPage, setSearchPage] = useState(1);
    const [toggleNavItems, setToggleNavItems] = useState(true);
    const { innerWidth, innerHeight } = window;
    const [visitorCount, setVisitorCount] = useState(null);

    const getMovies = () => {
        axios
            .get(API + page)
            .then((response) => {
                setMovies(response.data.results);
                if (response.data.results.length === 0) {
                    // alert("No Movies Found.");
                    handleDecrement();
                }
            })
            .catch((error) => {
                alert(error.message);
            });
        window.scrollTo(0, 0);
    };

    const searchMovies = (searchQuery) => {
        axios
            .get(SEARCH_API + searchQuery + "&page=" + searchPage)
            .then((response) => {
                setMovies(response.data.results);
                if (response.data.results.length === 0) {
                    // alert("No Movies Found.");
                    handleDecrement();
                }
            })
            .catch((error) => {
                alert(error.message);
            });
        window.scrollTo(0, 0);
    };

    const getTrailer = (searchTrailerId) => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${searchTrailerId}/videos?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US`
            )
            .then((response) => {
                let flag = true;
                for (let i = 0; i < response.data.results.length; i++) {
                    if (response.data.results[i].type === "Teaser") {
                        setTrailerKey(response.data.results[i].key);
                        flag = false;
                        break;
                    }
                }

                if (flag === true) {
                    setTrailerKey(response.data.results[0].key);
                }
            })
            .catch((error) => {
                // alert(error.message);
                alert("TRAILER NOT FOUND" + "\n" + error.message);
                setButtonPopup(false);
            });
    };

    useEffect(() => {
        getMovies();
    }, [API, page]);

    useEffect(() => {
        if (searchQuery) {
            searchMovies(searchQuery);
        }
    }, [searchQuery, searchPage]);

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleIncrement = () => {
        if (!searchQuery) {
            setPage((prevPage) =>
                prevPage >= 1 ? prevPage + 1 : (prevPage = 1)
            );
        } else if (searchQuery) {
            setSearchPage((prevPage) =>
                prevPage >= 1 ? prevPage + 1 : (prevPage = 1)
            );
        }
        window.scrollTo(0, 0);
    };

    const handleDecrement = () => {
        if (!searchQuery) {
            setPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : (prevPage = 1)
            );
        } else if (searchQuery) {
            setSearchPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : (prevPage = 1)
            );
        }
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (innerWidth >= 850) {
            setToggleNavItems(true);
        }
        if (innerWidth < 850) {
            setToggleNavItems(false);
        }
    }, [innerWidth]);

    const toggleBurger = () => {
        setToggleNavItems(true);
        setTimeout(() => {
            setToggleNavItems(false);
            if (toggleNavItems) {
            }
        }, 4000);
    };

    useEffect(async () => {
        await axios
            .patch("https://shrouded-lowlands-25573.herokuapp.com/counter")
            .then((response) => {
                
            })
            .catch((e) => {
                console.log("Error: ", e.error);
            });

        await axios
            .get("https://shrouded-lowlands-25573.herokuapp.com/counter")
            .then((response) => {
                setVisitorCount(response.data.visitor_count);
            })
            .catch((e) => {
                console.log("Error: ", e.error);
            });
    }, []);

    return (
        <>
            <header>
                <form className="navForm">
                    <div onClick={toggleBurger} id="burger" className="burger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul
                        style={
                            toggleNavItems
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                        className="navItems"
                    >
                        <li
                            onClick={() => {
                                setPage(1);
                                setAPI(POPULAR_API);
                                getMovies();
                                setSearchQuery("");
                            }}
                        >
                            Popular
                        </li>
                        <li
                            onClick={() => {
                                setPage(1);
                                setAPI(TOP_RATED_API);
                                getMovies();
                                setSearchQuery("");
                            }}
                        >
                            Top Rated
                        </li>
                        <li
                            onClick={() => {
                                setPage(1);
                                setAPI(NOW_PLAYING);
                                getMovies();
                                setSearchQuery("");
                            }}
                        >
                            Now Playing
                        </li>
                        <li
                            onClick={() => {
                                setPage(1);
                                setAPI(UPCOMING_API);
                                getMovies();
                                setSearchQuery("");
                            }}
                        >
                            Upcoming
                        </li>
                    </ul>
                </form>
                <input
                    className="search"
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleOnChange}
                />
            </header>
            <div className="movieContainer">
                {movies.length > 0 &&
                    movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            {...movie}
                            setButtonPopup={setButtonPopup}
                            setSearchTrailerId={setSearchTrailerId}
                        />
                    ))}

                {buttonPopup && searchTrailerId ? (
                    <VideoPopup
                        trigger={buttonPopup}
                        setButtonPopup={setButtonPopup}
                    >
                        {getTrailer(searchTrailerId)}
                        <iframe
                            key={searchTrailerId}
                            className="videoContainer"
                            type="text/html"
                            height="100%"
                            width="100%"
                            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`}
                            allow="autoplay; encrypted-media;"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </VideoPopup>
                ) : null}
                <div className="nextAndPrevBtn">
                    <button onClick={handleDecrement}>
                        PREV PAGE {searchQuery ? searchPage : page}
                    </button>
                    <h2 className="visitorCounter">Visitor: {visitorCount}</h2>
                    <button onClick={handleIncrement}>
                        NEXT PAGE {searchQuery ? searchPage : page}
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
