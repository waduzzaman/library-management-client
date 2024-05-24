
import  { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import Modal from "../../components/Modal/Modal";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../providers/AuthProvider";

const ViewDetails = ({ loggedInUser }) => {
  const { user } = useContext(AuthContext) || {};
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://community-library-server.vercel.app/books/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleBorrowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Error loading book details</div>;
  }

  return (
    <div className="">
      <Helmet>
        <title> Library | Book Details</title>
      </Helmet>
      <div className="text-black text-center py-4">
        <h1 className="text-3xl font-bold">Book Details</h1>
      </div>

      <div className="container mx-auto p-2">
        <div className="grid grid-cols-3 gap-8 p-4">
          <div className="border-2 p-5  border-slate-800 bg-slate-100 drop-shadow-2xl rounded-lg ">
            <img
              src={book.image}
              alt={book.name}
              className="w-full object-cover mb-4 rounded-lg"
            />

            <h2 className="text-xl font-semibold mb-2">
              <span className="font-bold">Title:</span> {book.name}
            </h2>

            <h2 className="text-lg font-semibold mb-2">
              <span className="font-bold">Author:</span> {book.author}
            </h2>

            <p className="text-gray-800 mb-2 font-bold">
              <span className="font-bold">Quantity: </span>
              {book.quantity}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Description: </span>
              {book.description}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Category:</span> {book.category}
            </p>
            <div className="flex">
              <p className="text-gray-600 font-bold mb-2 mr-2">Ratings: </p>
              <p>
                <Rating
                  style={{ maxWidth: 96 }}
                  value={book.ratings}
                  readOnly
                />
              </p>
            </div>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Content: </span> {book.content} days
            </p>

            <button
              className="btn btn-info"
              onClick={handleBorrowClick}
              disabled={book.quantity === 0}
            >
              Borrow
            </button>

            {showModal &&
              book && ( // Add a conditional check for book
                <Modal
                  onClose={handleCloseModal}
                  loggedInUser={loggedInUser}
                  book={book}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

ViewDetails.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
};

export default ViewDetails;
