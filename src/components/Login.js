import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const[isSignInForm,setIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

 
  const dispatch = useDispatch();

  const handleButtonClick = () =>{
      const message = checkValidData(email.current.value,password.current.value);
      
      setErrorMessage(message);
      if(message) return;

    //logic
    if(!isSignInForm){
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/110416582?v=4"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

          
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(errorMessage);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+": "+errorMessage );
        // ..
      });
    }
    else{
      //signin
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+": "+errorMessage );
  });
    }
  };

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
      <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black bg-opacity-65 w-1/4 h-2/3 p-12 my-36  mx-auto right-0 left-0 rounded-lg z-20 text-white' >
        <h1 className='font-semibold text-3xl py-4 px-2'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && ( < input ref={name} type='text' placeholder='Full Name' className='p-4 my-2 w-full rounded-md  bg-stone-800 bg-opacity-35 border border-stone-600'/>)}
        <input ref={email} type='text' placeholder='Email or phone number' className='p-4 my-2 w-full rounded-md  bg-stone-800 bg-opacity-35 border border-stone-600'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full rounded-md bg-stone-800 bg-opacity-35 border border-stone-600'/>
        <p className='text-red-500'>{errorMessage}</p>
        <button className='p-4 my-2 bg-red-600 w-full rounded-lg hover:bg-red-700 transition-colors ease-in-out' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='my-4 mx-2 cursor-pointer hover:text-stone-500 transition-colors ease-in-out' onClick={toggleSignInForm} >{isSignInForm? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login