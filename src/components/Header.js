import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react"
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";





const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
    });
  };

  const dispatch = useDispatch();

  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        
        navigate("/browse");

      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
        navigate("/");
      }
    });
  }, [])

  return (
    <div className='absolute px-8 py-4 bg-gradient-to-br from-black w-full h-full z-10 flex justify-between'>
      <img className='h-24 px-20'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>
       {auth.currentUser &&
        <div className='flex flex-col align-middle'>
          <img className=' h-12 w-12 ml-2 flex'
            alt='usericon'
            src={auth.currentUser?.photoURL} />
          <button className='text-white flex' onClick={handleSignOut}>
            (sign out)
          </button>
        </div>
}
    </div>
    
  )
}

export default Header