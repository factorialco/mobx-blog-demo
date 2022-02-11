import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { IBlogForm } from "../Posts/components/BlogForm";

export const UpdatePost: React.FC<IBlogForm> = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const blog = { title: `Title ${id}`, content: `Content ${id}` }


  const [state, setState] = useState({
    title: blog?.title || "",
    content: blog?.content || ""
  })

  const handleOnChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    console.log(state)
    return navigate(`/`)
  }

  return (<div>
    <form onSubmit={handleOnSubmit}>
      <div>
        <input name="title" type="text" value={state.title} onChange={handleOnChange} placeholder="title" required />
      </div>
      <div>
        <textarea name="content" value={state.content} onChange={handleOnChange} placeholder="content" required>
        </textarea>
      </div>
      <div><button type="submit">Submit</button></div>
    </form>
  </div>)
}


