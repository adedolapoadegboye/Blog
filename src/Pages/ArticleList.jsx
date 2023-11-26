import React from "react";
import ListOfArticles from "../Reuseables/ListOfArticles";
import articles from "../Pages/Articles.jsx/Article-Content-1";


const ArticleList = () => {
  return (
    <div className="px-10 lg:px-[200px]">
      <h1 className="text-4xl text-center font-bold text-teal-600">Featured Articles</h1>
      <ListOfArticles articles={articles}/>
    </div>
  );
};

export default ArticleList;
