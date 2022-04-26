import React, { useEffect, useState } from "react";
import { Form } from "../../common/form";
import { observer } from "mobx-react-lite";
import blogStore from "../../store/blogStore";
import { PostList } from "./components/Posts/PostList";

export const Home = observer(() => {
  const [state, setState] = useState({
    posts: [],
    isLoading: true,
  });

  const createAction = (data) => {
    blogStore.addPost(data);
  };

  useEffect(() => {
    blogStore.allPosts().then((res) => {
      setState({ isLoading: false, posts: res });
    });
  });

  return (
    <div className="container w-50 p-3">
      <div className="pt-3 pb-5">
        <Form buttonText="Add Post" submitAction={createAction} />
      </div>
      <div>
        <div className="card">
          <h2 className="card-header p-2">Latest Posts</h2>
          <PostList posts={state.posts} isLoading={state.isLoading} />
        </div>
      </div>
    </div>
  );
});
