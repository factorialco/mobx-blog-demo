import React from 'react'
import {observer} from 'mobx-react'
import {BlogStore} from '../../../store/BlogStore'
import { BlogPost } from '../../../store/BlogStore';
import { Link } from 'react-router-dom';

interface Blog{
blog: BlogPost
}

const BlogCard: React.FC<Blog> = observer(({blog})=>{
 const blogStore = BlogStore

  const handleDelete = (id: string) =>{
    blogStore.deletePost(id)
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
    <button onClick={()=> handleLike(blog?.id)}>like</button>
  </div>
</div>
})

export default BlogCard