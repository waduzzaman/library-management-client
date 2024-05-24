
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Modal from '../../components/Modal/Modal'; // Import your Modal component
import { Helmet } from "react-helmet-async";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    // Fetch borrowed books for the logged-in user
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch(`https://community-library-server.vercel.app/borrowed-books?userEmail=${user.email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch borrowed books");
        }
        const data = await response.json();
        setBorrowedBooks(data);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
      }
    };

    fetchBorrowedBooks();
  }, [user]);

  const returnBook = async (bookId) => {
    try {
      // Send request to return book
      const response = await fetch(`https://community-library-server.vercel.app/books/${bookId}/return`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: user.email, // Assuming user context is available
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to return book');
      }

      // Remove book card from UI (update state accordingly)
      setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId));
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  const handleOpenModal = (bookId) => {
    setSelectedBookId(bookId);
  };

  const handleCloseModal = () => {
    setSelectedBookId(null);
  };

  return (
    <div>
       <Helmet>
        <title> Library | Borrowed Book</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Borrowed Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {borrowedBooks.map((book) => (
          <div key={book.id} className="border p-4 rounded-md shadow-md">
            <img src={book.image} alt={book.name} className="w-full mb-2 rounded-md" />
            <h2 className="text-xl font-semibold mb-1">{book.name}</h2>
            <p className="text-gray-700 mb-2">Category: {book.category}</p>
            <p className="text-gray-700 mb-2">Borrowed Date: {book.borrowedDate}</p>
            <p className="text-gray-700 mb-2">Return Date: {book.returnDate}</p>
            <button onClick={() => returnBook(book.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Return
            </button>
            <button onClick={() => handleOpenModal(book.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Return with Modal
            </button>
          </div>
        ))}
      </div>
      {selectedBookId && (
        <Modal onClose={handleCloseModal} bookId={selectedBookId} />
      )}
    </div>
  );
};

export default BorrowedBooks;

