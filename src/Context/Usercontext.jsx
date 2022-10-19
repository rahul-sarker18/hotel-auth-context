import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";

export const Authcontext = createContext();
const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [cuser, setCuser] = useState(null);
  const [loder, setLoder] = useState(true);

  // email and pass sign up
  const signupFun = (email, password) => {
    setLoder(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // email and pass log in
  const loginFun = (email, password) => {
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user name sate
  const usernameFun = (username) => {
    setLoder(true)
    return updateProfile(auth.currentuser, {
      displayName: username,

    });
  };

  // google sign up
  const provider = new GoogleAuthProvider();

  const googlesignup = () => {
    setLoder(true)
    return signInWithPopup(auth, provider);
  };

  //get login user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCuser(user);
      setLoder(false)
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    signupFun,
    loginFun,
    auth,
    loder,
    usernameFun,
    googlesignup,
    cuser,
  };
  return (
    <div>
      <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default Usercontext;
