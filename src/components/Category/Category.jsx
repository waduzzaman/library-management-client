

import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Category = () => {
  const [books, setBooks] = useState([]);
  const [categoryBooks, setCategoryBooks] = useState({});

  useEffect(() => {
    fetch("https://community-library-server.vercel.app/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        categorizeBooks(data);
      })
      .catch((error) => console.error("Error fetching spots:", error));
  }, [books]);

  const categorizeBooks = (booksData) => {
    const categorized = {};
    booksData.forEach((book) => {
      if (categorized[book.category]) {
        categorized[book.category].push(book);

        // console.log(book)
        
      } else {
        categorized[book.category] = [book];
        // console.log(book)
      }
    });
    setCategoryBooks(categorized);
    // console.log(categorized)
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Category</h1>
      <div className="grid grid-cols-3 gap-8 p-4">
        {Object.keys(categoryBooks).map((category) => (
          <div
            key={category}
            className="border-2 border-slate-800 bg-slate-100 drop-shadow-2xl rounded-lg p-4"
          >
            <h2 className="text-xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 gap-4">
              {categoryBooks[category].map((book) => (
                
                <div
                  key={book._id}
                  className="border border-gray-300 pl-2 rounded-lg"
                >
                  <div className="flex items-center p-2">
                    
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-1/5 mr-5"
                    />
                
                    <div>
                  {categoryBooks[category].length}
                      <h3 className="text-lg font-semibold mr-10">
                        {book.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-1">
                        Author: {book.author}
                      </p>
                      <Rating
                        style={{ maxWidth: 96 }}
                        value={book.ratings}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to={`/category-books/${category}`} className="btn btn-info mt-3">
              <PrivateRoute>View All {category} Books</PrivateRoute>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

