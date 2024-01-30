import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'

const VideoBackground = () => {

    const getMovieVideos = async() =>{
       const data = await fetch('https://api.themoviedb.org/3/movie/572802/videos?language=en-US', API_OPTIONS);
       const json = await data.json();
       console.log(json);

       
    };

    useEffect(() => {
        getMovieVideos();
       }, [])


  return (
    <div>background</div>
  )
}

export default VideoBackground;