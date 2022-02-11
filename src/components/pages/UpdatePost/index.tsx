import React, {useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import {observer} from 'mobx-react'
import { IBlogForm } from '../Posts/components/BlogForm';
import { BlogStore } from '../../store/BlogStore';

export const UpdatePost:React.FC<IBlogForm> = observer(()=>{
   let { id } = useParams();
  const blog = BlogStore.findPostById(id)

  const navigate = useNavigate()

  const [state, setState] = useState({
    title: blog?.title || '',
    content: blog?.content || ''
  })

  const handleOnChange = (e:any)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleOnSubmit = (e: any )=>{
    e.preventDefault()
    if (blog && state.title !== "") {
      BlogStore.updatePost(blog.id, state.title, state.content)
      return  navigate(`/`)
    }
  }

  if (!blog) {
    return (<div>
      <p>No blog found</p>
      <Link to="/" />
      </div>)
  }

  return <div>
   <form>
      <div>
        <input name="title" type="text" value={state.title} onChange={handleOnChange} placeholder="title"/>
      </div>

      <div>
        <textarea name="content" value={state.content} onChange={handleOnChange} placeholder="title">
        </textarea>
      </div>

      <div><button onClick={handleOnSubmit}>Submit</button></div>
    </form>
  </div>
})


