

import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the specific article based on the index
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        // Set the article based on the index
        setArticle(data.articles[id]);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      <p className="text-gray-600 mb-4"> {article.author}</p>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="rounded-lg shadow-md mb-4" />
      )}
      <p className="text-lg text-gray-700">{article.content}</p>
    </div>
  );
};

export default NewsDetails;

