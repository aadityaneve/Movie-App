import React from "react";
import { VideocamSharp } from "react-ionicons";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};

const Movie = ({
    setSearchTrailerId,
    setButtonPopup,
    id,
    title,
    poster_path: posterPath,
    overview,
    vote_average: voteAverage,
    release_date: releaseDate,
}) => (
    <div className="movie">
        <div className="movieHeader">
            <VideocamSharp
                className="getTrailer"
                color={"#00000"}
                height="50px"
                width="50px"
                onClick={() => {
                    setSearchTrailerId(id);
                    setButtonPopup(true);
                }}
            />
            <span className="releaseDate">{releaseDate}</span>
            <img
                src={
                    posterPath
                        ? IMG_API + posterPath
                        : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1459&q=80"
                }
                alt="title"
                placeholder={releaseDate}
            />
            <div className="movieInfo">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(voteAverage)}`}>
                    {voteAverage}
                </span>
            </div>
            <div>
                <div className="movieOver">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    </div>
);

export default Movie;
