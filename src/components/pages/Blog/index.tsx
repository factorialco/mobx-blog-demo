import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useBlogStore } from '../../store/BlogStoreContext';

export const Blog: React.FC = () => {
  const store = useBlogStore()
  const { id } = useParams()
  const blog = store.findPostById(id)
  const navigate = useNavigate()

  const handleDelete = (id: string | undefined) => {
    store.deletePost(id)
    return navigate(`/`)
  }

  return (
    <div>
      <h2>{blog?.title}</h2>
      <p>{blog?.content}</p>
      <div>
        <Link to={`/update/${blog?.id}`}><button>update</button></Link>
        <button onClick={() => handleDelete(blog?.id)}>delete</button>
      </div>
    </div>
  )
}
