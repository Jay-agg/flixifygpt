import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12 '>
    <h1 className='text-6xl font-bold w-1/2'>{title}</h1>
    <p className='py-6 text-lg w-1/2'>{overview}</p>
    <div className='flex '>
        <button className='bg-gray-500 py-3 px-8 text-xl text-white rounded-md mr-4 hover:bg-gray-300'>▶️ Play
        </button>
        <button className='bg-gray-500 bg-opacity-50 py-2 px-10 text-xl text-white  rounded-md mr-4 hover:bg-gray-300'> ℹ More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;