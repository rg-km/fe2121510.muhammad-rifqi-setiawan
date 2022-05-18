// TODO: answer here
import React from 'react';

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
            <button aria-label="Like Button">Like</button>
            <button aria-label="Dislike Button">Dislike</button>
            <p aria-label="Like Count">0</p>
            <p aria-label="Dislike Count">0</p>
          </div>
          
    </div>
  )
}
