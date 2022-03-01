import { v4 as uuidv4 } from 'uuid';
export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  likes: number;
}

export const createStore = () => {
  return {
    posts: [] as IBlogPost[],

    getIndex(id: string | undefined) {
      return this.posts.findIndex(post => post.id === id)
    },

    createPost(title: string, content: string) {
      const post: IBlogPost = {
        id: uuidv4(),
        title,
        content,
        likes: 0
      }
      this.posts.push(post)
    },

    updatePost(id: string, title: string, content: string) {
      const index = this.getIndex(id)
      if (index > -1) {
        this.posts[index].title = title
        this.posts[index].content = content
      }
    },

    deletePost(id: string | undefined) {
      const index = this.getIndex(id)
      if (index > -1) this.posts.splice(index, 1)
    },

    likePost(id: string | undefined) {
      if (id === undefined) return null
      const post = this.posts.find(item => item.id === id)
      if (post) post.likes += 1
    },

    findPostById(id: string | undefined) {
      if (id === undefined) return null
      return this.posts.find(item => item.id === id)
    },

    get totalLikes() {
      let totalLikes = this.posts.reduce((count, post) => count + post.likes, 0);
      return totalLikes;
    },
    
    get allPosts() {
      return this.posts
    }
  }
};

export type TStore = ReturnType<typeof createStore>;