import React from 'react'
import {useState} from 'react'

export interface IBlogForm {
  handleOnSubmit?: any;
  initialData?: any;
}
export interface IFormData {
  title: string;
  content: string;
}
export const BlogForm: React.FC<IBlogForm> = ({handleOnSubmit, initialData})=>{

    const [state, setState] = useState({
    title: initialData?.title || '',
    content: initialData?.content || ''
  })

   const handleOnChange = (e:any)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  const resetForm = (e: any)=>{
    setState({title: '', content: ''})
  }

  return (<form>
      <div>
        <input name="title" type="text" value={state.title} onChange={handleOnChange} placeholder="title"/>
      </div>
      <div>
        <textarea name="content" value={state.content} onChange={handleOnChange} placeholder="content">
        </textarea>
      </div>
      <div><button onClick={(e)=> handleOnSubmit(e, state, resetForm)}>Submit</button></div>
    </form>)
}
