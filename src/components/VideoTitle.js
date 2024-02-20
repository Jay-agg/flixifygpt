import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  useMovieTrailer(movieId);

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-3xl md:text-6xl font-bold w-1/2">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="flex ">
        <Link to={"/movie/" + movieId}>
          <button className="bg-white py-1 md:py-3 px-2 md:px-8 my-2 md:my-0 text-lg text-black font-semibold rounded-md mr-4 hover:bg-gray-300 hover:bg-opacity-90">
            ▶ Play
          </button>
        </Link>
        <button className=" hidden md:inline-block bg-gray-500 bg-opacity-50 py-2 px-10 text-xl text-white  rounded-md mr-4 hover:bg-opacity-25">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
