import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Firebase/firebase.comfig';

export const AuthContex = createContext()

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)

  function handleLogin(email, pass){
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,pass)
  }


  function handleRegister(email, pass){
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,pass)
  }


  function handleLogout(email, pass){
    setLoading(true)
    return signOut(auth)
  }


  function handleUpdateProfile(name , photo){
    return updateProfile(auth.currentUser,{
      displayName: name,
      photoURL: photo
    })
  }

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth , currentUser=>{
      setLoading(false)
      setUser(currentUser)
      console.log(currentUser,'current User');
    })
    return ()=> unSub()
  },[])

  console.log(user, ' user from auth');


  const obj ={
    handleLogin,
    handleRegister,
    handleLogout,
    user,setUser,
    loading,setLoading,
    handleUpdateProfile
  }

  return <AuthContex.Provider  value={obj}>
    {children}
  </AuthContex.Provider>
}

export default AuthProvider