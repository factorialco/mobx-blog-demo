import React from 'react'
import { blogStore } from '../../store/BlogStore'
import { BlogCard } from './components/BlogCard'
import { BlogForm } from './components/BlogForm'
import { observer } from 'mobx-react'
export const Posts: React.FC = observer(() => {

  const handleOnSubmit = (e: any, data: any, resetForm: any) => {
    e.preventDefault()
    blogStore.createPost(data.title, data.content)
    resetForm()
  }

  return <div>
    <h1>All posts</h1>
    <BlogForm handleOnSubmit={handleOnSubmit} />
    <div>
      {blogStore.posts.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
    <h5>Our blog posts have been liked {blogStore.totalLikes} times</h5>
  </div>
})



