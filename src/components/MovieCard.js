import React from "react";
import { IMG_CDN } from "../utils/Constants";
import useGetMovieVideo from "../hooks/useGetMovieVideo";

const MovieCard = ({ movieId, posterPath }) => {
  const key = useGetMovieVideo(movieId);
  const handleButtonClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=" + key;
  };

  if (!posterPath) return null;
  return (
    <div className=" w-36 md:w-48 m-4 rounded-lg overflow-hidden relative transition-transform transform hover:scale-110">
      <img
        alt="MovieCard"
        src={IMG_CDN + posterPath}
        className="cursor-pointer"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default MovieCard;
