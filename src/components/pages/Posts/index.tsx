import React from 'react'
import { BlogForm, IFormData } from './components/BlogForm'

import { v4 as uuidv4 } from 'uuid';
import { useLocalObservable, Observer } from 'mobx-react';

export interface IBlogPost {
  id: string;
  title: string;
  content: string;
}
export const Posts:React.FC = ()=>{
  const store = useLocalObservable(() => ({
    posts: [] as IBlogPost[],

    createPost(title: string, content: string) {
      const post: IBlogPost = {
        id: uuidv4(),
        title,
        content
      }
      this.posts.push(post)
    },

    deletePost(id: string | undefined) {
      const index = this.posts.findIndex(post => post.id === id)
      if (index > -1) this.posts.splice(index, 1)
    }
    
  }))

  const handleOnSubmit = (e: any, data: IFormData, resetForm: any) => {
    e.preventDefault()

    if (data.title !== "") {
      store.createPost(data.title, data.content)
      resetForm()
    }
  }

  return <Observer>
    {() => (
      <div>
        <h1>All post</h1>
        <BlogForm handleOnSubmit={handleOnSubmit} />
        <div>
          {store.posts.map(blog => (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <div>
                <button onClick={() => store.deletePost(blog.id)}>delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </Observer>
}



