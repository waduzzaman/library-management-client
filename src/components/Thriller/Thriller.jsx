import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";

const Thriller = () => {
  const [thrillerBooks, setThrillerBooks] = useState([]);

  useEffect(() => {
    fetch("https://community-library-server.vercel.app/books")
      .then((response) => response.json())
      .then((data) => {
        const filteredBooks = data.filter(
          (book) => book.category === "Thriller"
        );
        setThrillerBooks(filteredBooks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <section className="pb-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8 py-10">Thrillers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
            {thrillerBooks.map((book) => (
              <div key={book._id} className="border rounded-lg p-4 bg-white shadow-md">
                <img src={book.image} alt={book.name} className="mx-auto w-full h-auto" />
                <h3 className="text-xl font-semibold mt-2">{book.name}</h3>
                <p className="text-gray-600"><span className="font-semibold">Author: </span>{book.author}</p>
                <p className="text-gray-600"><span className="font-semibold">Category </span>{book.category}</p>
                <div className="flex justify-start">
                  <p className="text-gray-600 font-semibold">Ratings:</p>
                  <Rating style={{ maxWidth: 96 }} value={book.ratings} readOnly />
                </div>
                <Link
              to={`/view-details/${book._id}`}
              className="btn btn-info mt-3 "
            >
              <PrivateRoute>View Details</PrivateRoute>
            </Link> 
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thriller ;
