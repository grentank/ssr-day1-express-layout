import React from 'react';

export default function PostCard({ post }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{post.createdAt.toString()}</h6>
          <p className="card-text">{post.message}</p>
          <a href="/" className="card-link">Card link</a>
        </div>
      </div>
    </div>
  );
}
