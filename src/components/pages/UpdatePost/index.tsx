import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { IBlogForm } from '../Posts/components/BlogForm';

export const UpdatePost:React.FC<IBlogForm> = ()=>{
  const blog = {id: 3433, title: "title 3433", content: "content 3433"}
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
      console.log(state)
      return  navigate(`/`)
    }
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
}


