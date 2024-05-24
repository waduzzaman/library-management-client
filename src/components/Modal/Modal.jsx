

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Modal = ({ onClose, book }) => {
  // console.log(book._id);
  const { user: loggedInUser } = useContext(AuthContext);
  
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!book || !book._id) {
        throw new Error('Invalid book');
      }
  
      const borrowedBookData = {
        returnDate: returnDate,
        userEmail: loggedInUser.email, // Include userEmail from loggedInUser
        userName: loggedInUser.displayName, // Include userName from loggedInUser
      };
  
      const response = await fetch(
        `https://community-library-server.vercel.app/books/${book._id}/borrow`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(borrowedBookData),
        }
    );
    
  
      if (!response.ok) {
        throw new Error("Failed to borrow book");
      }
  
      onClose();
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };
  

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <Helmet>
        <title> Library | Modal</title>
      </Helmet>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-lg font-semibold mb-4">Borrow Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="returnDate"
              className="block text-sm font-medium text-gray-700"
            >
              Return Date:
            </label>
            <input
              type="date"
              id="returnDate"
              className="mt-1 p-2 border rounded-md w-full"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded-md w-full"
              value={loggedInUser.email}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border rounded-md w-full"
              value={loggedInUser.displayName}
              disabled
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default Modal;
