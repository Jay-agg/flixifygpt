import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
        alt='background img'/>
      </div>
      <form className='absolute bg-black bg-opacity-65 w-1/4 h-2/3 p-12 my-36  mx-auto right-0 left-0 rounded-lg z-20 text-white' >
        <h1 className='font-semibold text-3xl py-4 px-2'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && ( < input type='text' placeholder='Full Name' className='p-4 my-2 w-full rounded-md  bg-stone-800 bg-opacity-35 border border-stone-600'/>)}
        <input type='text' placeholder='Email or phone number' className='p-4 my-2 w-full rounded-md  bg-stone-800 bg-opacity-35 border border-stone-600'/>
        <input type='password' placeholder='Password' className='p-4 my-2 w-full rounded-md bg-stone-800 bg-opacity-35 border border-stone-600'/>
        <button className='p-4 my-2 bg-red-600 w-full rounded-lg hover:bg-red-700 transition-colors ease-in-out'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='my-4 mx-2 cursor-pointer hover:text-stone-500 transition-colors ease-in-out' onClick={toggleSignInForm} >{isSignInForm? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login