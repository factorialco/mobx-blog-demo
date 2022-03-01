import React from 'react'
import { Link } from 'react-router-dom';

import { useBlogStore } from '../../../store/BlogStoreContext';
import { IBlogPost } from '../../../store/BlogStore';

interface IBlog {
  blog: IBlogPost
}
export const BlogCard: React.FC<IBlog> = ({ blog }) => {
  const store = useBlogStore()

  return (
    <div>
      <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
      <p>{blog.content}</p>
      <div>
        <Link to={`/update/${blog.id}`}><button>update</button></Link>
        <button onClick={() => store.deletePost(blog.id)}>delete</button>
        <button onClick={() => store.likePost(blog.id)}>like</button>
      </div>
    </div>
  )
}