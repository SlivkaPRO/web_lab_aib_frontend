import React, { useState } from 'react';

const Post = ({ post, remove }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className='Post'>
        <div className='post__text'>
          <strong>{post.username}</strong>
          <p>{post.text}</p>
          <p>{post.tag}</p>
        </div>
        <div className="post__button">
          <button
            className={liked ? 'liked' : 'not-liked'}
            onClick={toggleLike}
          >
            Like post
          </button>
          <button onClick={() => remove(post)}>удалить</button>
        </div>
      </div>
    </>
  );
};

export default Post;
