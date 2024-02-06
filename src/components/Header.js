import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO, PFP } from "../utils/Constants";
import BrowseHeader from "./BrowseHeader";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {auth.currentUser == null && (
        <div className="absolute px-8 py-4 bg-gradient-to-br from-black w-full h-full z-10 flex justify-between">
          <img className="h-24 mx-auto md:px-20" src={LOGO} alt="logo"></img>
        </div>
      )}
      {auth.currentUser && <BrowseHeader />}
    </>
  );
};

export default Header;
