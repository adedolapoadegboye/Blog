import React from "react";
import { Link } from "react-router-dom";

const ListOfArticles = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Link key={article.name} to={`/article/${article.name}`}>
          {/*           <hr className="border-1 border-black mb-6"></hr>
           */}{" "}
           <br></br>
          <h3 className="font-bold font-serif hover:bg-blue-100 pt-2">
            {article.title}
          </h3>
          <p className="italics font-light text-sm">
            {article.content[0].substring(0, 100)}...
          </p>
          <br></br>
          <hr className="border-1 border-black"></hr>
          <br></br>
        </Link>
      ))}
    </div>
  );
};

export default ListOfArticles;
