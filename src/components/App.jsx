import React from 'react';
import Form from './Form';
import PostCard from './PostCard';

export default function App({ allPosts, onePost }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Main page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
      <div className="row">
        {allPosts && allPosts.map((el) => <PostCard post={el} key={el.id} />)}
      </div>
      <div className="row">
        {onePost && <PostCard post={onePost} />}
      </div>
    </div>
  );
}
