import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Common/NavBar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/article" element={<ArticleList/>}/>
          <Route path="/article/:articleId" element={<Article/>}/>
          <Route path="/NotFound" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
