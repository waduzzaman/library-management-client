import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching spots:", error));
  }, []);

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold mb-8 text-center">Tourist Spots</h1>
      <div className="grid grid-cols-3 gap-8 p-4 ">
        {books.map((book) => (
          <div
            key={book._id}
            className="border-2 p-5  border-slate-800 bg-slate-100 drop-shadow-2xl rounded-lg "
          >
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center mb-2">
              {book.author}
            </h2>
            <p className="text-gray-800 mb-2 font-bold">{book.quantity}</p>
            <p className="text-gray-600 mb-4">{book.description}</p>
            <p className="text-gray-600 mb-2">Average Cost: ${book.category}</p>
            <p className="text-gray-600 mb-2">Seasonality: {book.ratings}</p>
            <p className="text-gray-600 mb-2">
              Travel Duration: {book.content} days
            </p>

            {/* <Link
              to={`/view-details/${book._id}`}
              className="btn btn-info mt-3 "
            >
              <PrivateRoute>View Details</PrivateRoute>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
