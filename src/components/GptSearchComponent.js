import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/Constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 top-0 left-0">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG_URL}
          alt="Background"
        />
      </div>
      <div className="flex flex-col min-h-screen justify-start items-center p-0 m-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
