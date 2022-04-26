import React from "react";
import { Form } from "../../common/form";
import { observer } from "mobx-react-lite";
import blogStore from "../../store/blogStore";
import { PostList } from "./components/Posts/PostList";

export const Home = observer(() => {
  const posts = blogStore.allPosts;

  const createAction = (data) => {
    blogStore.addPost(data);
  };

  return (
    <div className="container w-50 p-3">
      <div className="pt-3 pb-5">
        <Form buttonText="Add Post" submitAction={createAction} />
      </div>
      <div>
        <div className="card">
          <h2 className="card-header p-2">Latest Posts</h2>
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
});
