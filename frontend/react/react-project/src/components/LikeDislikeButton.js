// TODO: answer here
import React from "react"
import { useEffect, useState } from "react"
import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function LikeDislikeButton({
    id, 
    isLiked = false, 
    isDisliked = 0, 
    likeCount = 0, 
    dislikeCount}) {
    

    // TODO: answer here
    
    const [like, setLike] = useState(likeCount);
    const [dislike, setDislike] = useState(dislikeCount);
    const [isLikedButton, setIsLiked] = useState(isLiked);
    const [isDislikedButton, setIsDisliked] = useState(isDisliked);
    
    function handleLike() {
        setLike(like + 1);
        setIsLiked(true);
        setIsDisliked(false);
    }
    function handleDislike() {
        setDislike(dislike + 1);
        setIsLiked(false);
        setIsDisliked(true);
    }

    return (
        <div aria-label="Like & Dislike Button" className="LikeDislikeButton">
            <button aria-label="Like Button" onClick={() => {
                handleLike();
            }}
            >Like</button>
            <button aria-label="Dislike Button" onClick={() => {
                if (isLikedButton === false && isDislikedButton === false) {
                    handleLike();
                }else if (isLikedButton === true) {
                    handleDislike();
                }
            }}
            >Dislike</button>
            <p aria-label="Like Count">{like}</p>
            <p aria-label="Dislike Count">{dislike}</p>
            </div>
            
    );
}