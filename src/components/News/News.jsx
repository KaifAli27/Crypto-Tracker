
 /*
 import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);

  const API_KEY = '9aa7c198748f4db3a90f61082c6e0ba7';

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=crypto&language=en&pageSize=10&sortBy=publishedAt&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="news-wrapper">
  <h3 className="news-title">Latest Crypto News</h3>
  <div className="news-bar">
    {articles.map((article, idx) => (
      <a key={idx} className="news-item" href={article.url} target="_blank" rel="noreferrer">
        <img
  src={article.urlToImage || 'https://via.placeholder.com/240x110?text=No+Image'}
  onError={(e) => { e.target.src = 'https://via.placeholder.com/240x110?text=No+Image'; }}
  alt="news"
/>
        <div className="news-details">
          <h4>{article.title}</h4>
          <p>{article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}</p>
        </div>
      </a>
    ))}
  </div>
</div>

  );
};

export default News;
 
 
 
 
 */
