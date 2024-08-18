import React from "react";
import { IMG_CDN } from "../utils/Constants";
import { Link } from "react-router-dom";

const SuggestedCard = ({ movie, id }) => {
  return (
    <>
      <div className="container flex mx-auto items-center bg-black mb-10 p-4">
        <img
          alt="movie poster"
          src={IMG_CDN + movie?.poster_path}
          className="w-1/3 md:w-1/5 h-full object-cover mr-4"
        />
        <div>
          <h2 className="text-white text-3xl mb-2">{movie?.original_title}</h2>
          <h2 className="text-gray-400 text-xl mb-2">{movie?.release_date}</h2>
          <p className="text-white text-xl">{movie?.overview}</p>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <Link to={"/movie/" + id}>
              <button className=" px-4 md:px-12 py-2 md:py-4 text-sm md:text-xl font-medium text-black bg-white rounded-md hover:bg-opacity-80 transition-all duration-[.2s]">
                ▶️ Play
              </button>
            </Link>
            <button className="hidden md:flexpx-4 md:px-12 py-2 md:py-4 text-sm md:text-xl font-medium text-white bg-gray-500 rounded-md hover:bg-opacity-80 transition-all duration-[.2s] lg:flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ltr-4z3qvp e1svuwfo1"
                data-name="CircleI"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2> More Info</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestedCard;
