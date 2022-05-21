// TODO: answer here
import React from "react"
import { useEffect, useState } from "react"
import { getSession, auth } from "../api/auth"
import { API_URL } from "../api/config"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function LikeDislikeButton({
    id, 
    image,
    isLiked, 
    isDisliked = 0, 
    likeCount = 0, 
    dislikeCount}) {
    
    
    // TODO: answer here
    const [like, setLike] = useState(likeCount);
    const [dislike, setDislike] = useState(dislikeCount);
    const [isLikedButton, setIsLiked] = useState(isLiked);
    const [isDislikedButton, setIsDisliked] = useState(isDisliked);
    
    const handleLikeButton = () => {
        if (isLikedButton && !isDislikedButton){
            setIsLiked(false);
            setLike(like - 1);
        } else if (!isLikedButton && !isDislikedButton){
            setIsLiked(true);
            setLike(like + 1);
        } else {
            setIsLiked(true);
            setIsDisliked(false);
            setLike(like + 1);
            setDislike(dislike - 1);
        }
    }

    const handleDislikeButton = () => {
        if (!isLikedButton && isDislikedButton){
            setIsDisliked(false);
            setDislike(dislike - 1);
        } else if (!isLikedButton && !isDislikedButton){
            setIsDisliked(true);
            setDislike(dislike + 1);
        } else {
            setIsDisliked(true);
            setIsLiked(false);
            setDislike(dislike + 1);
            setLike(like - 1);
        }
    }
    
    return (
        <div aria-label="Like & Dislike Button" className="LikeDislikeButton">
            <button aria-label="Like Button" onClick={() => {
                handleLikeButton();                
            }}
            >Like</button>
            <button aria-label="Dislike Button" onClick={() => {
                handleDislikeButton();
                
            }}
            >Dislike</button>
            <p aria-label="Like Count">{like}</p>
            <p aria-label="Dislike Count">{dislike}</p>
            </div>
            
    );
}