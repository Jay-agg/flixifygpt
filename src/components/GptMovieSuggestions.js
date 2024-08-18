import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import SuggestedCard from "./SuggestedCard";

const GptMovieSuggestions = () => {
  const { gptSearchList } = useSelector((store) => store.gpt);
  useEffect(() => {
    console.log(gptSearchList);
  }, [gptSearchList]);

  return (
    <>
      <div className="space-x-4 p-4">
        {gptSearchList && gptSearchList.length > 0 ? (
          <div>
            {gptSearchList?.map((movie, index) => (
              <SuggestedCard key={index} id={movie?.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-white rounded-md container h-96 mx-auto flex flex-col items-center justify-center capitalize font-bold text-xl bg-black text-center">
            <p>Search now to get results. Let the movie magic begin!</p>
            <p className="mt-5 text-gray-400 capitalize">
              This is an AI based Movie Search.Now you don't need to think much
              about what movie to watch what genre it should be just write
              whatever you are feeling like and find your perfect Match 🤩
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default GptMovieSuggestions;
