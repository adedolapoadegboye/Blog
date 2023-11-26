import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Common/NavBar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";
import NotFound from "./Pages/NotFound";
import Footer from "./Common/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div className="lg:mx-20 lg:px-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/article" element={<ArticleList/>}/>
          <Route path="/article/:articleId" element={<Article/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
