import React from 'react'
import BlogCard from './components/BlogCard'
import { BlogForm } from './components/BlogForm'


export const Posts = ()=>{
  const blogPosts = [
    { id: 3433, title: "title 3433", content: "content 3433" },
    { id: 3434, title: "title 3434", content: "content 3434" }
  ]

  const handleOnSubmit = (e: any, data: any, resetForm: any )=>{
    e.preventDefault()
    if (data.title !== "") {
      console.log(data)
      
      resetForm()    
    }
  }

  return <div>
    <h1>All post</h1>
    <BlogForm handleOnSubmit={handleOnSubmit} />
    <div>
      {blogPosts.map(blog => <BlogCard key={blog.id} blog={blog}/>)}
    </div>
  </div>
}



