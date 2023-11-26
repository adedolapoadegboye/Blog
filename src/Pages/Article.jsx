import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const {articleId} = useParams();
  return (
    <div>
      <h2>this is the article page with id: {articleId}</h2>
    </div>
  );
};

export default Article;
