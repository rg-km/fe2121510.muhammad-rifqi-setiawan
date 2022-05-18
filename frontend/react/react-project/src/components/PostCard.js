// TODO: answer here
import React from 'react';
import { auth } from '../api/auth';
import LikeDislikeButton from './LikeDislikeButton';

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  return (
    <div className="post-card" aria-label="Post Card">
      <div className="post-card-image">
        <img src={image} alt="post" aria-label="Post Image" />
        </div>
        <div className="post-card-username" aria-label="Post User Name">
          <p>{userId}</p>
          <p>{username}</p>
        </div>
        <div className="post-card-caption">
          <p aria-label="Post Caption">{caption}</p>
        </div>
        <div className="post-card-date" aria-label="Post Date">
          <p>{date}</p>
          </div>
          <div className="post-card-like-dislike">
            <LikeDislikeButton />
          </div>
    </div>
  )
}
