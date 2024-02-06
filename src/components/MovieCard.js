import React from "react";
import { IMG_CDN } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 m-4 rounded-lg ">
      <img alt="MovieCard" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
