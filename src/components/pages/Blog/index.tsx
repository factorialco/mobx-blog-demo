import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Blog = ()=>{
  const { id } = useParams()
  const blog = { id, title: `title ${id}`, content: `content ${id}` }


  const handleDelete = (id: string | undefined) =>{
    console.log(id)
  }
  
  return <div>
  <h3>{blog?.title}</h3>
  <p>{blog?.content}</p>
  <div>
    <Link to={`/blog/update/${blog?.id}`}><button>update</button></Link>
    <button onClick={()=> handleDelete(blog?.id)}>delete</button>
  </div>
</div>
}

export default Blog