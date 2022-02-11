import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {observer} from 'mobx-react'
import { BlogStore } from './../../store/BlogStore';

export const Blog: React.FC = observer(()=>{
  let { id } = useParams();
  const blogStore = BlogStore
  const blog = blogStore.findPostById(id)


  const handleDelete = (id: string | undefined) =>{
    blogStore.deletePost(id)
  }
  const handleLike = (id: string | undefined) => {
    blogStore.likePost(id)
  }

  return <div>
  <h3>{blog?.title}</h3>
  <p>{blog?.content}</p>
  <div>
    <Link to={`/blog/update/${blog?.id}`}><button>update</button></Link>
    <button onClick={() => handleDelete(blog?.id)}>delete</button>
    <button onClick={()=> handleLike(blog?.id)}>like</button>
  </div>
</div>
})