import React, { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";
import { observer } from "mobx-react"
import { IBlogForm } from "../Posts/components/BlogForm";
import { blogStore } from "../../store/BlogStore";

export const UpdatePost: React.FC<IBlogForm> = observer(() => {
  const navigate = useNavigate()
  let { id } = useParams();

  const blog = blogStore.findPostById(id)

  const [state, setState] = useState({
    id: id || "",
    title: blog?.title || "",
    content: blog?.content || ""
  })

  const handleOnChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    blogStore.updatePost(state.id, state.title, state.content)
    return navigate(`/`)
  }

  if (!blog) {
    return (<div>
      <p>No blog found</p>
      <Link to="/" />
    </div>)
  }

  return (<form onSubmit={handleOnSubmit}>
    <div>
      <input name="title" type="text" value={state.title} onChange={handleOnChange} placeholder="title" required />
    </div>
    <div>
      <textarea name="content" value={state.content} onChange={handleOnChange} placeholder="title" required>
      </textarea>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>)
})



