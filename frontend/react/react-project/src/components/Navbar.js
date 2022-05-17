import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function Navbar() {
  // TODO: answer here
  return (
    <div aria-label="Navbar" className="Navbar">
      <a href="/" aria-label="App Title">Home</a>
      <img src={Image} aria-label="App Logo"/>
    </div>
  );
}
