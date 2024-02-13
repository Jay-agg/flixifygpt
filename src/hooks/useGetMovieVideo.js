import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useGetMovieVideo = (id) => {
  const [key, setKey] = useState(null);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (videos) => videos.type === "Trailer"
    );

    const trailer = filterData.length
      ? filterData[0]
      : json?.results.find((video) => video.type === "Clip");

    setKey(trailer?.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return key;
};

export default useGetMovieVideo;
