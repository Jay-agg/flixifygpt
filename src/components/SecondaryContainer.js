import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className=" m-0 md:-mt-52 relative z-30 pl-4 md:pl-10 ">
        <div className="bg-gradient-to-b from-transparent to-black">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
