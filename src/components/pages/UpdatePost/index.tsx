import React, { useState } from 'react'
import { ChangeEvent, FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useBlogStore } from '../../store/BlogStoreContext';

export const UpdatePost: React.FC = () => {
  const store = useBlogStore()
  const { id } = useParams()
  const blog = store.findPostById(id)
  const navigate = useNavigate()

  const [state, setState] = useState({
    id: blog?.id || '',
    title: blog?.title || '',
    content: blog?.content || ''
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (blog && state.title !== "") {
      store.updatePost(state.id, state.title, state.content)
      return navigate(`/`)
    }
  }

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input name="title" type="text" value={state.title} onChange={handleOnChange} placeholder="title" />
        </div>
        <div>
          <textarea name="content" value={state.content} onChange={handleOnChange} placeholder="title">
          </textarea>
        </div>
        <div><button type="submit">Submit</button></div>
      </form>
    </div>
  )
}


