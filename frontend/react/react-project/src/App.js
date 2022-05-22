import "./App.css"
// TODO: answer here
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./api/config";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";

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
      <div className="card-wrapper">
        {listPost.map((post) => (
          <PostCard
          image={post.image}
          username={post.author.name} 
          caption={post.content} 
          date={post.createdAt} 
          isLiked={post.liked} 
          isDisliked={post.disliked} 
          likeCount={post.likeCount} 
          dislikeCount={post.dislikeCount} 
          id={post.id}
          refetchListPost={fetchListPost}
          />
        ))}
        </div>
      <UploadForm/>
      {/* <header className="App-header">
        <h1 aria-label="App Title">Instagram Clone</h1>
      </header> */}
    </div>
  );
}

export default App