import { v4 as uuidv4 } from 'uuid';
import { makeObservable, observable, action, computed } from "mobx"

export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  likes: number;
}

export class BlogModel {
  posts: IBlogPost[] = []

  constructor() {
    makeObservable(this, {
      posts: observable,
      createPost: action,
      updatePost: action,
      deletePost: action,
      findPostById: action,
      likePost: action,
      totalLikes: computed,
    })
  }

  private getPost(id: string | undefined) {
    return this.posts.find(post => post.id === id)
  }
  createPost(title: string, content: string) {
    const post: IBlogPost = {
      id: uuidv4(),
      title,
      content,
      likes: 0
    }
    this.posts.push(post)
  }
  updatePost(id: string, title: string, content: string) {
    const post = this.getPost(id)
    if (post) {
      post.title = title
      post.content = content
    }
  }
  deletePost(id: string | undefined) {
    const index = this.posts.findIndex(post => post.id === id)
    if (index > -1) this.posts.splice(index, 1)
  }
  findPostById(id: string | undefined) {
    return this.getPost(id)
  }
  likePost(id: string | undefined) {
    const post = this.getPost(id)
    if (post) post.likes += 1
  }
  get totalLikes() {
    let totalLikes = this.posts.reduce((count, post) => count + post.likes, 0);
    return totalLikes;
  }
}

export const blogStore = new BlogModel()