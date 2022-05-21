import "./App.css"
// TODO: answer here
import React from "react";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./api/config";

function App() {
  // TODO: answer here
  const [listPost, setListPost] = useState([])

  const fetchListPost = async () => {
    try {
      const res = await axios.get(`${API_URL}/post/list`, {
        withCredentials: true,
      })
      setListPost(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchListPost()
  }, [])
  return (
    <div aria-label="App" className="App">
      <Navbar />
      <PostCard />
      <UploadForm />
    </div>
  );
}

export default App