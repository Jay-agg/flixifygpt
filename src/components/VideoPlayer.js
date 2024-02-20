import React from "react";
import { useParams } from "react-router-dom";
import useGetMovieVideo from "../hooks/useGetMovieVideo";

const VideoPlayer = () => {
  const { movieId } = useParams();
  const id = useGetMovieVideo(movieId);
  return (
    <div>
      <div className=" w-screen h-screen ">
        <iframe
          className=" w-screen h-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            id +
            "?&playlist=" +
            id +
            "&loop=1&autoplay=1&controls=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
