import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react'
import { blogStore } from '../../../store/BlogStore'
import { IBlogPost } from '../../../store/BlogStore';

interface Blog {
  blog: IBlogPost
}

export const BlogCard: React.FC<Blog> = observer(({ blog }) => {
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    blogStore.deletePost(id)
    navigate("/")
  }
  const handleLike = (id: string | undefined) => {
    blogStore.likePost(id)
  }
  
  return <div>
    <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
    <p>{blog.content}</p>
    <div>
      <Link to={`/blog/update/${blog.id}`}><button>update</button></Link>
      <button onClick={() => handleDelete(blog.id)}>delete</button>
      <button onClick={() => handleLike(blog?.id)}>like</button>
    </div>
  </div>
})
