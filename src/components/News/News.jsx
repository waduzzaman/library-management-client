


// import  { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const News = () => {
//   const [articles, setArticles] = useState([]);
//   const [visibleArticles, setVisibleArticles] = useState(4);
//   const [showMore, setShowMore] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch news');
//         }
//         const data = await response.json();
//         setArticles(data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, []);

//   const truncateContent = (content) => {
//     if (!content) return ''; 
//     const maxLength = 150; 
//     return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
//   };

//   const loadMore = () => {
//     setVisibleArticles((prevVisible) => prevVisible + 4);
//     if (visibleArticles + 4 >= articles.length) {
//       setShowMore(false); // No more articles to load
//     }
//   };
  
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {articles.slice(0, visibleArticles).map((article, index) => (
//         <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
//           <div className="h-40 overflow-hidden">
//             {article.urlToImage ? (
//               <img className="object-cover w-full h-full" src={article.urlToImage} alt={article.title} />
//             ) : (
//               <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">No Image Available</div>
//             )}
//           </div>
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
//             <p className="text-gray-600 mb-2"> {article.author || 'Unknown'}</p>
//             <p className="text-gray-700">{truncateContent(article.description)}</p>
//             <Link to={`/news/${index}`} className="text-blue-500 font-semibold mt-2 inline-block hover:underline">
//               Read More
//             </Link>
//           </div>
//         </div>
//       ))}
//       {showMore && articles.length > visibleArticles && (
//         <div className="flex justify-center mt-6">
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
//             onClick={loadMore}
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default News;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(4);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const truncateContent = (content) => {
    if (!content) return '';
    const maxLength = 150;
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
  };

  const loadMore = () => {
    setVisibleArticles((prevVisible) => prevVisible + 4);
    if (visibleArticles + 4 >= articles.length) {
      setShowMore(false); // No more articles to load
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {articles.slice(0, visibleArticles).map((article, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-40 overflow-hidden">
            {article.urlToImage ? (
              <img className="object-cover w-full h-full" src={article.urlToImage} alt={article.title} />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">No Image Available</div>
            )}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-2"> {article.author || 'Unknown'}</p>
            <p className="text-gray-700">{truncateContent(article.description)}</p>
            <Link to={`/news/${index}`} className="text-blue-500 font-semibold mt-2 inline-block hover:underline">
              Read More
            </Link>
          </div>
        </div>
      ))}
      {showMore && articles.length > visibleArticles && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default News;


