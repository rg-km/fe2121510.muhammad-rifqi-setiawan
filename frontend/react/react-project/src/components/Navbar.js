import { useEffect, useState } from "react"
import React from "react"
 
import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"
 
export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [profileList, setProfileList] = useState([]);
  
  const getProfileListData = async () => {
    try {
      const profileData = await (getSession());
      console.log(profileData)
      setProfileList(profileData.data);
      if (Object.keys(profileData).length > 0) {
        setIsLogin(true);
      }
      else {
        setIsLogin(false)
      }
    } catch (error) {
      console.log("error get profile data ", error);
    }
  };
 
  useEffect(() => {
    // TODO: answer here
    getProfileListData();
  }, []);  
  
  // TODO: answer here
  return (
    <div aria-label="Navbar" className="Navbar">
      <a href="/" aria-label="App Title">Home</a>
      <img src={Image} aria-label="App Logo"/>
      
      <div className="Authlogin">
        {isLogin ? (
          <h1 aria-label="Profile" onClick={auth}>Anda telah login {profileList.user.name}</h1>
          
        ) : (
          <button aria-label="Login" onClick={auth}>
          Login
        </button>
        )}
      </div>
    </div>
  );
}