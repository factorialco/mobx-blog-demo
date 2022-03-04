import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Posts} from './components/pages/Posts'
import {Blog} from './components/pages/Blog'
import { UpdatePost } from './components/pages/UpdatePost/index';
import { BlogStoreProvider } from './components/store/BlogStoreContext';


function App() {
  return (
    <BlogStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/update/:id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </BlogStoreProvider>
  );
}

export default App;
