import React from 'react'
import { Link } from 'react-router-dom';

const Blog: React.FC = ()=>{
  const blog = {id: 3433, title: "title 3433", content: "content 3433"}

  const handleDelete = (id: number | undefined) =>{
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