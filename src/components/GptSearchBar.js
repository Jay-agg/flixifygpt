import React from "react";
import { BG_IMG_URL } from "../utils/Constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_IMG_URL} alt="background img" />
      </div>

      <div className="pt-[10%] flex justify-center">
        <form className=" w-1/2 bg-black grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 rounded-md col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
          ></input>

          <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg ">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
