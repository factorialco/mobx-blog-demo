import React from "react";
import { Link } from "react-router-dom";
import blogStore from "../../../../store/blogStore";
import { observer } from "mobx-react";
export const PostList = observer(({ posts, isLoading }) => {
  if (isLoading) {
    return <h1>Posts loading</h1>;
  }

  return (
    <ul className="list-group list-group-flush">
      {posts.length > 1 ? (
        posts.map((post) => {
          if (!post.id) return null;
          return (
            <li className="list-group-item" key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <div className="d-flex justify-content-end">
                <Link to={`/${post.id}`} className="btn btn-primary">
                  View
                </Link>
                &nbsp;
                <Link to={`update/${post.id}`} className="btn btn-primary">
                  Update
                </Link>
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => blogStore.deletePost(post.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })
      ) : (
        <h6 className="p-2">No post added yet</h6>
      )}
    </ul>
  );
});
