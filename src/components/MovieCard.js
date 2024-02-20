import React from "react";
import { IMG_CDN } from "../utils/Constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movieId, posterPath }) => {
  if (!posterPath) return null;
  return (
    <Link to={"/movie/" + movieId}>
      <div className=" w-36 md:w-48 m-4 rounded-lg overflow-hidden relative transition-transform transform hover:scale-110">
        <img
          alt="MovieCard"
          src={IMG_CDN + posterPath}
          className="cursor-pointer"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
