import "./App.css";
// TODO: answer here
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./api/config";

import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";
import { VStack } from "@chakra-ui/react";

function App() {
  // TODO: answer here
  const [listPost, setListPost] = useState([]);
  const fetchListPost = async () => {
    try {
      const res = await axios.get(`${API_URL}/post/list`, {
        withCredentials: true,
      });
      setListPost(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListPost();
  }, []);

  return (
    <>
      <Navbar />
      <VStack as="main" aria-label="App" bgColor="#2b416d">
        <UploadForm />

        <VStack spacing={12} py={16}>
          {listPost.map((post) => (
            <PostCard
              image={post.image}
              username={post.author.name}
              caption={post.content}
              avatar={post.author.image}
              date={post.createdAt.slice(0, 10)}
              isLiked={post.liked}
              isDisliked={post.disliked}
              likeCount={post.likeCount}
              dislikeCount={post.dislikeCount}
              id={post.id}
              refetchListPost={fetchListPost}
              profile={post.author.profile}
              userId={post.author.id}
            />
          ))}
        </VStack>
      </VStack>
    </>
  );
}

export default App;
