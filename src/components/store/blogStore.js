import { makeObservable, observable, action, toJS, runInAction } from "mobx";
import axios from "axios";

const baseUrl = "http://localhost:3000";
class BlogModel {
  posts = [];
  constructor() {
    makeObservable(this, {
      posts: observable,
      addPost: action,
      deletePost: action,
      allPosts: action,
      getPost: action,
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
    runInAction(() => {
      this.posts.unshift(res.data);
    });
  };
  updatePost = async ({ id, title, body }) => {
    console.log(id, title, body);
    const post = this.getPost(id);

    await axios.put(`${baseUrl}/posts/${id}`, {
      title: title,
      body: body,
    });

    if (post) {
      runInAction(() => {
        post.title = title;
        post.body = body;
      });
    }
  };
  deletePost = async (id) => {
    await axios.delete(`${baseUrl}/posts/${id}`);
    runInAction(() => {
      const index = this.posts.findIndex((post) => post.id === id);
      if (index > -1) this.posts.splice(index, 1);
    });
  };

  async allPosts() {
    if (this.posts.length < 1) {
      const res = await axios.get(`${baseUrl}/posts`);
      runInAction(() => {
        this.posts = res.data.reverse();
      });
    }
    return toJS(this.posts);
  }
}

const blogStore = new BlogModel();
export default blogStore;
