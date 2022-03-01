import React from 'react'
import { Link } from 'react-router-dom';

interface Blog{
blog: any
}

const BlogCard: React.FC<Blog> = ({blog})=>{

  const handleDelete = (id: number) =>{
    console.log(id)
  }
return <div>
  <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
  <p>{blog.content}</p>
  <div>

    <Link to={`/blog/update/${blog.id}`}><button>update</button></Link>
    <button onClick={()=> handleDelete(blog.id)}>delete</button>
  </div>
</div>
}

export default BlogCard