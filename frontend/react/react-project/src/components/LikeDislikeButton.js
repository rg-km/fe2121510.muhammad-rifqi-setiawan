// TODO: answer here
import React from "react";
import axios from "axios";
import { API_URL } from "../api/config";
import { useEffect, useState } from "react";
import { getSession, auth } from "../api/auth";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";

export default function LikeDislikeButton({
  id,
  image,
  isLiked = 0,
  isDisliked = 0,
  likeCount = 0,
  dislikeCount = 0,
}) {
  // TODO: answer here
  const [like, setLike] = useState(likeCount);
  const [dislike, setDislike] = useState(dislikeCount);
  const [isLikedButton, setIsLikedButton] = useState(isLiked);
  const [isDislikedButton, setIsDislikedButton] = useState(isDisliked);

  const handleLikeButton = async () => {
    try {
      let res;
      if (!isLikedButton) {
        res = await axios.get(`${API_URL}/post/${id}/like`, {
          withCredentials: true,
        });
        if (!isDislikedButton) {
          setLike(like + 1);
          setIsLikedButton(true);
        } else {
          setLike(like + 1);
          setIsLikedButton(true);
          setDislike(dislike - 1);
          setIsDislikedButton(false);
        }
      } else {
        res = await axios.get(`${API_URL}/post/${id}/unlike`, {
          withCredentials: true,
        });
        setLike(like - 1);
        setIsLikedButton(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleDislikeButton = async () => {
    try {
      let res;
      if (!isDislikedButton) {
        res = await axios.get(`${API_URL}/post/${id}/dislike`, {
          withCredentials: true,
        });
        if (!isLikedButton) {
          setDislike(dislike + 1);
          setIsDislikedButton(true);
        } else {
          setDislike(dislike + 1);
          setIsDislikedButton(true);
          setLike(like - 1);
          setIsLikedButton(false);
        }
      } else {
        res = await axios.get(`${API_URL}/post/${id}/undislike`, {
          withCredentials: true,
        });
        setDislike(dislike - 1);
        setIsDislikedButton(false);
      }
      // refetchListPost()
    } catch (error) {
      console.log(error);
    } finally {
      // refetchListPost()
    }
  };

  return (
    <ButtonGroup size="sm" variant="solid" spacing={4} pb={2}>
      <Button
        aria-label="Like Button"
        onClick={handleLikeButton}
        colorScheme="blue"
      >
        Like: <Text aria-label="Like Count">{like}</Text>
      </Button>

      <Button
        aria-label="Dislike Button"
        onClick={handleDislikeButton}
        colorScheme="green"
      >
        Dislike: <Text aria-label="Dislike Count">{dislike}</Text>
      </Button>
    </ButtonGroup>
  );
}
