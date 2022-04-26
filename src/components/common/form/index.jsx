import React, { useState } from "react";

export function Form({ buttonText = "Submit", defaultState, submitAction }) {
  const [state, setState] = useState({
    id: defaultState ? defaultState.id : Math.floor(Math.random() * 101),
    title: defaultState ? defaultState.title : "",
    body: defaultState ? defaultState.body : "",
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitAction(state);
    setState({
      id: "",
      title: "",
      body: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mb-3">
        <input
          name="title"
          value={state.title}
          className="form-control"
          rows="5"
          onChange={changeHandler}
          placeholder="Title"
        />
      </div>
      <div className="form-group mb-3">
        <textarea
          name="body"
          value={state.body}
          className="form-control"
          rows="5"
          onChange={changeHandler}
          placeholder="Content"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        {buttonText}
      </button>
    </form>
  );
}
