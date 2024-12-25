import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // BrowserRouter burada import edilməli
import Todo from "./pages/todo/Todo";

function App() {
  return (
    // Router componenti bütün tətbiqin əhatə etməlidir
    <BrowserRouter>
      <Routes>
        {/* Yönləndirmələr */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
