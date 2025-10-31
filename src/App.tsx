import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Br28713383 from "./pages/Projects/br28713383/br28713383";
import News1 from "./pages/News/japan-news/japan-news";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/br28713383" element={<Br28713383 />} />
        <Route path="/news/japan-news" element = {<News1 />} />
      </Routes>
    </Router>
  );
};

export default App;
