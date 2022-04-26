import { makeObservable, observable, computed, action } from "mobx";

class BlogModel {
  posts = [];

  constructor() {
    makeObservable(this, {
      posts: observable,
      addPost: action,
      deletePost: action,
      findPostById: action,
      allPosts: computed,
    });
  }
  getPost(id) {
    return this.posts.find((post) => post.id === parseInt(id));
  }
  addPost = (post) => {
    this.posts.unshift(post);
  };
  updatePost({ id, title, body }) {
    const post = this.getPost(id);
    if (post) {
      post.title = title;
      post.body = body;
    }
  }
  deletePost = (id) => {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index > -1) this.posts.splice(index, 1);
  };
  findPostById(id) {
    return this.getPost(id);
  }
  get allPosts() {
    return this.posts;
  }
}

const blogStore = new BlogModel();
export default blogStore;
