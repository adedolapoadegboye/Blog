import React from "react";
import { useParams } from "react-router-dom";
import articles from "./Articles.jsx/Article-Content-1";
import NotFound from "./NotFound";
const Article = () => {
  const {articleId} = useParams();
  const article = articles.find(article => article.name === articleId);
  if(!article){
    return ( <NotFound />)
  }
  else{
    return (
      <div className="py-5 px-10 font-serif lg:px-300">
        <h1 className="text-center text-black text-bold font-serif text-md lg:text-2xl ">Title: {article.title}</h1>
        <br />
        <h2 className="text-justify text-xs lg:text-lg">{article.content.map((line, index)=><p key={index}>{line}</p>)}</h2>
      </div>
    );
  }
};

export default Article;
