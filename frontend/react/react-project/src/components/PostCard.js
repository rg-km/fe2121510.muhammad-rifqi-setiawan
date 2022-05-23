// TODO: answer here
import React from 'react';
import LikeDislikeButton from './LikeDislikeButton';

export default function PostCard({ 
  image, 
  caption, 
  username, 
  userId, 
  date, 
  id, 
  likeCount, 
  dislikeCount, 
  isLiked, 
  isDisliked,
  refetchListPost,
}) {

  // TODO: answer here
  return (
    <div className="Post Card" aria-label="Post Card">
      <div>
        <a>
        <img src={image} alt="post image" aria-label="Post Image" className="Post-image"/>
        </a>
        <div className="Box">
          <div className="Box-inner1">
            <div className="namedate">
              <a aria-label="Post User Name" className="Username">
                <p>id : {userId} | name : {username}</p>
                <p aria-label="Post Date" className="Date">{date.slice(0,10)}</p>
              </a>
              <p aria-label="Post Caption" className="Caption">{caption}</p>
            </div>
          </div>
          <div className="Box-inner2">
            <LikeDislikeButton 
              id={id} 
              likeCount={likeCount} 
              dislikeCount={dislikeCount} 
              isLiked={isLiked} 
              isDisliked={isDisliked}
              refetchListPost={refetchListPost}/>
          </div>
        </div>
      </div>          
    </div>
  )
}
// </div>
// <div className="post-card-username" aria-label="Post User Name">
//   <p>{userId}</p>
//   <p>{username}</p>
// </div>
// <div className="post-card-caption">
//   <p aria-label="Post Caption">{caption}</p>
// </div>
// <div className="post-card-date" aria-label="Post Date">
//   <p>{date}</p>
//   </div>
//   <div className="post-card-like-dislike">
//     <LikeDislikeButton />