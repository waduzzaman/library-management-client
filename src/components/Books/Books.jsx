
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Books = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext) || {};
  const [control, setControl] = useState(false);
  const [sortBy, setSortBy] = useState("ascending");
  const [viewMode, setViewMode] = useState("card");
  const [showAvailableBooks, setShowAvailableBooks] = useState(false); 

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    const sortedBooks = [...books];
    if (e.target.value === "ascending") {
      sortedBooks.sort((a, b) => a.quantity - b.quantity);
    } else {
      sortedBooks.sort((a, b) => b.quantity - a.quantity);
    }
    setBooks(sortedBooks);
  };

  useEffect(() => {
    fetch("https://community-library-server.vercel.app/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://community-library-server.vercel.app/books/email/${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://community-library-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setControl(!control);
            }
          });
        Swal.fire("Deleted!", "Your book has been deleted.", "success");
      }
    });
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleFilterAvailableBooks = () => {
    setShowAvailableBooks(!showAvailableBooks);
  };

  return (
    <div className="container mx-auto p-2">
      <Helmet>
        <title>Library | All Books</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-8 text-center pt-10">All Books</h1>

      <div className="mb-4 text-center">
        <label className="text-2xl font-semibold" htmlFor="sort">
          Sort by Quantity:{" "}
        </label>
        <select
          className="text-lg bg-emerald-400 p-1"
          id="sort"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option className="" value="ascending">
            Ascending
          </option>
          <option value="descending">Descending</option>
        </select>
      </div>

      <div className=" text-right my-5 py-5">
        <label className="text-2xl font-semibold" htmlFor="viewMode">
          View Mode:{" "}
        </label>
        <select
          className="text-lg bg-emerald-400 p-1"
          id="viewMode"
          value={viewMode}
          onChange={(e) => handleViewModeChange(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      <div className="mb-4 text-center">
        <button
          className="btn btn-primary"
          onClick={handleFilterAvailableBooks}
        >
          {showAvailableBooks ? "Show All Books" : "Show Available Books"}
        </button>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books
            .filter((book) => !showAvailableBooks || book.quantity > 0)
            .map((book) => (
              <div
                key={book._id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md"
              >
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{book.name}</h2>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold">Author:</span> {book.author}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold">Quantity:</span> {book.quantity}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-bold">Description:</span>{" "}
                    {book.description}
                  </p>
                  <div className="flex mb-2">
                    <p className="text-gray-600 font-bold mr-2">Ratings:</p>
                    <div>
                      <Rating
                        style={{ maxWidth: 96 }}
                        value={book.ratings}
                        readOnly
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <span className="font-bold">Content:</span> {book.content}{" "}
                    days
                  </p>
                  <hr className="border-t border-gray-200" />
                  <div className="flex mt-4 justify-between">
                    <Link
                      to={`/view-details/${book._id}`}
                      className="text-indigo-600 hover:text-indigo-900 hover:bg-blue-500 p-2 border bg-blue-100"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/update-book/${book._id}`}
                      className="text-green-600 hover:text-white ml-2 p-2 border bg-green-200 hover:bg-emerald-800"
                    >
                      Update
                    </Link>
                    <button
                      className="text-red-600 hover:text-red-900 ml-2 p-2 border bg-red-200 hover:bg-red-500"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {books
              .filter((book) => !showAvailableBooks || book.quantity > 0)
              .map((book) => (
                <tr key={book._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={book.image} alt={book.image} className="w-16 " />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Link
                        to={`/view-details/${book._id}`}
                        className="text-indigo-600 hover:text-indigo-900 p-2 border hover:bg-blue-500"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/update-book/${book._id}`}
                        className="text-green-600 hover:text-white ml-2 p-2 border  hover:bg-emerald-800"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="text-red-600 hover:text-red-900 ml-2 p-2 border hover:bg-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Books;
