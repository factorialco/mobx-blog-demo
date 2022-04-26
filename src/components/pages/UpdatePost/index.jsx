import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "../../common/form";
import blogStore from "../../store/blogStore";

export function UpdatePost() {
  const { id } = useParams();
  const post = blogStore.findPostById(id);

  const navigate = useNavigate();

  const updateAction = (data) => {
    blogStore.updatePost(data);
    navigate("/");
  };

  return (
    <div className="container w-50">
      <div className="pt-3">
        <Form
          buttonText="Update"
          defaultState={post}
          submitAction={updateAction}
        />
      </div>
    </div>
  );
}
