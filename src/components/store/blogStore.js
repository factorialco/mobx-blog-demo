import { makeObservable, observable, action, toJS } from "mobx";
import axios from "axios";

const baseUrl = "http://localhost:3000";
class BlogModel {
  posts = [];
  constructor() {
    makeObservable(this, {
      posts: observable,
      addPost: action,
      deletePost: action,
      findPostById: action,
      allPosts: action,
    });
  }
  getPost(id) {
    return this.posts.find((post) => post.id === parseInt(id));
  }
  addPost = async (post) => {
    const res = await axios.post(`${baseUrl}/posts`, {
      title: post.title,
      body: post.body,
    });
    this.posts.unshift(res.data);
  };
  updatePost = async ({ id, title, body }) => {
    const post = this.getPost(id);
    if (post) {
      post.title = title;
      post.body = body;
    }
    await axios.put(`${baseUrl}/posts/${id}`, {
      title: post.title,
      body: post.body,
    });
  };
  deletePost = async (id) => {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index > -1) this.posts.splice(index, 1);
    await axios.delete(`${baseUrl}/posts/${id}`);
  };
  async findPostById(id) {
    return this.getPost(id);
  }
  async allPosts() {
    if (this.posts.length < 1) {
      const res = await axios.get(`${baseUrl}/posts`);
      this.posts = res.data.reverse();
    }

    return toJS(this.posts);
  }
}

const blogStore = new BlogModel();
export default blogStore;
