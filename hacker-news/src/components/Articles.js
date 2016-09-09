import React from 'react';
import ArticleItem from './ArticleItem';
import Data from '../data';

let Articles = React.createClass({
  render: function () {
    return (
      <div className="article-box">
        {Data.map(article => (
          <ArticleItem key={article.id} id={article.id}
                       headline={article.headline}
                       points={article.points}
                       author={article.author}
                       time_added={article.time_added}
                       comments_count={article.comments_count}
          />
        ))}
      </div>
    );
  }
});

export default Articles;