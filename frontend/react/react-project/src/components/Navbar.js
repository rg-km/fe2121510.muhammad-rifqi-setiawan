import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function Navbar() {
  // TODO: answer here
  return (
    <nav aria-label="Navbar" class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a aria-label="App Title" class="navbar-brand" href="/">
          <img aria-label="App Logo" alt="" width="30" height="24" class="d-inline-block align-text-top" />
          Instagram
        </a>
      </div>
    </nav>
  );
}
