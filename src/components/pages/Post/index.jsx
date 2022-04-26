import React from "react";
import { useParams } from "react-router-dom";
import blogStore from "../../store/blogStore";

export function Post() {
  const { id } = useParams();
  const post = blogStore.findPostById(id);

  return (
    <div className="container w-50">
      <div className="pt-3">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
