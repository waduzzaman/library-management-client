import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../providers/AuthProvider";

const Modal = ({ onClose, bookId }) => {
  const { user } = useContext(AuthContext);

  const [returnDate, setReturnDate] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setReturnDate("");

    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
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
              value={user.email}
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
              value={user.displayName}
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
  bookId: PropTypes.string.isRequired, // Ensure that bookId is a required string prop
};

export default Modal;
