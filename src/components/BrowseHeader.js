import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react"
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO, PFP } from '../utils/Constants';


const BrowseHeader = () =>{

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
      const unsubscribe = onAuthStateChanged(auth, (user) => {
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
  
      return () => unsubscribe();
    }, [])
  

    return (
       
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
          <img
            className="w-44"
            src={LOGO}
            alt="logo"
          />
            <div className="flex p-2">
              <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
              <button onClick={handleSignOut} className="font-bold text-white ">
                (Sign Out)
              </button>
            </div>
        </div>
    );
}

export default BrowseHeader;