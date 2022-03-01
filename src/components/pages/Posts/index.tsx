import React from 'react'
import  { ChangeEvent } from 'react'
import { BlogCard } from './components/BlogCard'
import { BlogForm, IFormData } from './components/BlogForm'

import { useBlogStore } from '../../store/BlogStoreContext';
import { Observer } from "mobx-react-lite"

export const Posts: React.FC = () => {
  const store = useBlogStore()

  const handleOnSubmit = (e: ChangeEvent<HTMLInputElement>, data: IFormData, resetForm: any) => {
    e.preventDefault()

    if (data.title !== "") {
      store.createPost(data.title, data.content)
      resetForm()
    }
  }

  return (
    <Observer>
      {() => (
        <div>
          <h1>All post</h1>
          <BlogForm handleOnSubmit={handleOnSubmit} />
          <div>
            {store.allPosts.map(blog => <BlogCard key={blog.id} blog={blog} />)}
          </div>
          <div>
            <h5>Our blogs post is liked {store.totalLikes} times</h5>
          </div>
        </div>
      )}
    </Observer>
  )
}
