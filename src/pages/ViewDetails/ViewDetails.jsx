// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import PropTypes from "prop-types";
// import Modal from "../../components/Modal/Modal"; // Import your Modal component
// import { Rating } from "@smastrom/react-rating";

// const ViewDetails = () => {
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const [showModal, setShowModal] = useState(false);

//   const handleBorrowClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await fetch(`https://community-library-server.vercel.app/books/${id}`);

//         if (!response.ok) {
//           throw new Error("Failed to fetch book details");
//         }
//         const data = await response.json();
//         setBook(data);
//       } catch (error) {
//         console.error("Error fetching book details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!book) {
//     return <div>Error loading book details</div>;
//   }

//   return (
//     <div className="">
//       <Helmet>
//         <title> CL | Book Details</title>
//       </Helmet>
//       <div className="text-black text-center py-4">
//         <h1 className="text-3xl font-bold">Book Details</h1>
//       </div>

//       <div className="container mx-auto p-2">
//         <div className="grid grid-cols-3 gap-8 p-4">
//           <div className="border-2 p-5  border-slate-800 bg-slate-100 drop-shadow-2xl rounded-lg ">
//             <img
//               src={book.image}
//               alt={book.name}
//               className="w-full object-cover mb-4 rounded-lg"
//             />

//             <h2 className="text-xl font-semibold mb-2">
//               <span className="font-bold">Title:</span> {book.name}
//             </h2>

//             <h2 className="text-lg font-semibold mb-2">
//               <span className="font-bold">Author:</span> {book.author}
//             </h2>

//             <p className="text-gray-800 mb-2 font-bold">
//               <span className="font-bold">Quantity: </span>
//               {book.quantity}
//             </p>
//             <p className="text-gray-600 mb-4">
//               <span className="font-bold">Description: </span>
//               {book.description}
//             </p>
//             <p className="text-gray-600 mb-2">
//               <span className="font-bold">Category:</span> {book.category}
//             </p>
//             <div className="flex">
//               <p className="text-gray-600 font-bold mb-2 mr-2">Ratings: </p>
//               <p>
//                 <Rating
//                   style={{ maxWidth: 96 }}
//                   value={book.ratings}
//                   readOnly
//                 />
//               </p>
//             </div>
//             <p className="text-gray-600 mb-2">
//               <span className="font-bold">Content: </span> {book.content} days
//             </p>

//             <div>
//               {/* Borrow Button */}
//               <button className="btn btn-info" onClick={handleBorrowClick}>
//                 Borrow
//               </button>

//               {/* Modal */}
//               {showModal && (
//                 <Modal onClose={handleCloseModal}>
//                   <h2>Borrow Book</h2>
//                   {/* Form for borrowing */}
//                   {/* Return Date field */}
//                   {/* Email and Name fields */}
//                   {/* Submit Button */}
//                 </Modal>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ViewDetails.propTypes = {
//   book: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     author: PropTypes.string,
//     quantity: PropTypes.number,
//     description: PropTypes.string,
//     category: PropTypes.string,
//     ratings: PropTypes.number,
//     content: PropTypes.number,
//   }),
// };

// export default ViewDetails;

import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import Modal from "../../components/Modal/Modal";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../providers/AuthProvider";

const ViewDetails = ({ loggedInUser }) => {

  const { user } = useContext(AuthContext) ;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [returnDate, setReturnDate] = useState(""); // State for return date
  const [quantity, setQuantity] = useState(0); // State for quantity

  const handleBorrowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async () => {
    try {
      // Decrease the quantity by 1
      const updatedQuantity = quantity - 1;
      if (updatedQuantity < 0) {
        // Quantity can't be negative
        return;
      }
      
      // Update the book's quantity
      setQuantity(updatedQuantity);

      // Add the book to borrowed books (implement this according to your app's logic)

      // Disable Borrow button if quantity becomes 0
      if (updatedQuantity === 0) {
        // Disable Borrow button
      }

      // Close modal
      setShowModal(false);
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://community-library-server.vercel.app/books/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const data = await response.json();
        setBook(data);
        setQuantity(data.quantity); // Set initial quantity
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Error loading book details</div>;
  }

  if (!loading && !book) {
    return <div>Error: Unable to load book details</div>;
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
              {quantity}
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

            <div>
              {/* Borrow Button */}
              <button className="btn btn-info" onClick={handleBorrowClick} disabled={quantity === 0}>
                Borrow
              </button>

              {/* Modal */}
              {showModal && (
                <Modal onClose={handleCloseModal}>
                  <h2>Borrow Book</h2>
                  {/* Form for borrowing */}
                  <div>
                    <label htmlFor="returnDate">Return Date:</label>
                    <input
                      type="date"
                      id="returnDate"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                  <div>
                    {/* Email and Name fields filled with currently logged-in user's email and displayName */}
                    <p>Email: {loggedInUser?.email}</p>
                    <p>Name: {loggedInUser?.displayName}</p>
                  </div>
                  {/* Submit Button */}
                  <button onClick={handleFormSubmit}>Submit</button>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewDetails.propTypes = {
  loggedInUser: PropTypes.object.isRequired, // PropTypes for logged-in user
};

export default ViewDetails;


