import "./App.css";
import { Header } from "./components/layouts/Header";
import { Home } from "./components/pages/Home";
import { Post } from "./components/pages/Post";
import { UpdatePost } from "./components/pages/UpdatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/:id" element={<Post />}></Route>
          <Route exact path="update/:id" element={<UpdatePost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
