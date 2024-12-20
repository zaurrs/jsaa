import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from 'react-router-dom'; 
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

function App() {

  return (
    <Routes>
       <Route path="/" element={<Home />} />
    {/* <Home /> */}
    <Route path="/home" element={<Home />} /> 
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default App;
