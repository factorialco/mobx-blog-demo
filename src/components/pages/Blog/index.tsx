import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
export const Blog: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const blog = {
    id,
    title: `Title ${id}`,
    content: `Content ${id}`
  }

  const handleDelete = (id: any) => {
    console.log(id)
    navigate('/')
  }

  return (<div>
    <h3>{blog?.title}</h3>
    <p>{blog?.content}</p>
    <div>
      <Link to={`/blog/update/${blog?.id}`}><button>update</button></Link>
      <button onClick={() => handleDelete(blog?.id)}>delete</button>
    </div>
  </div>)
}
