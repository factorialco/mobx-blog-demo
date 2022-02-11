import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blog } from './components/pages/Blog'
import { Posts } from './components/pages/Posts'
import { UpdatePost } from './components/pages/UpdatePost/index';


function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blog/update/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
