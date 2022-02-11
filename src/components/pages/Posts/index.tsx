import React from 'react'
import {observer} from 'mobx-react'
import {BlogStore} from '../../store/BlogStore'
import BlogCard from './components/BlogCard'
import { BlogForm } from './components/BlogForm'

export const Posts:React.FC = observer(()=>{
  const handleOnSubmit = (e: any, data: any, resetForm: any )=>{
    e.preventDefault()
    if (data.title !== "") {
      BlogStore.createPost(data.title, data.content)
      resetForm()    
    }
  }
  
  return <div>
    <h1>All post</h1>
    <BlogForm handleOnSubmit={handleOnSubmit} />
    <div>
      {BlogStore.posts.map(blog => <BlogCard key={blog.id} blog={blog}/>)}
    </div>
    <h5>Our blogs post is liked {BlogStore.totalLikes} times</h5>
  </div>
})



