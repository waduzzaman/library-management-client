import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AddBook from "../pages/AddBook/AddBook";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import Mystery from "../components/Mystery/Mystery.jsx";
import Fiction from "../components/Fiction/Fiction.jsx";
import Thriller from "../components/Thriller/Thriller.jsx";
import Fantasy from "../components/Fantasy/Fantasy.jsx";
import News from "../components/News/News.jsx";
import NewsDetails from "../components/NewsDetails/NewsDetails.jsx";
import AddProgram from "../pages/AddProgram/AddProgram.jsx";
import Books from "../components/Books/Books.jsx";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks.jsx";
import UpdateBook from "../components/UpdateBook/UpdateBook.jsx";
// import UpdateTouristsSpot from "../pages/UpdateTouristsSpot/UpdateTouristsSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/all-books",
        element: (
          <PrivateRoute>
            <Books />
          </PrivateRoute>
        ),
      },
      {
        path: "/category-books",
        element: (
          <PrivateRoute>
            <CategoryBooks />
          </PrivateRoute>
        ),
      },

      {
        path: "/mystery",
        element: (
          <PrivateRoute>
            <Mystery />
          </PrivateRoute>
        ),
      },
      {
        path: "/fiction",
        element: (
          <PrivateRoute>
            <Fiction></Fiction>
          </PrivateRoute>
        ),
      },

      {
        path: "/thriller",
        element: (
          <PrivateRoute>
            <Thriller />
          </PrivateRoute>
        ),
      },

      {
        path: "/fantasy",
        element: (
          <PrivateRoute>
            <Fantasy />
          </PrivateRoute>
        ),
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/view-details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-program",
        element: (
          <PrivateRoute>
            <AddProgram />
          </PrivateRoute>
        ),
      },

      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed-books/:id",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },

        {
          path: "/update-book/:id",
          element: (
            <PrivateRoute>
             <UpdateBook/>
            </PrivateRoute>
          ),
          loader: ({ params }) =>fetch(`https://community-library-server.vercel.app/books${params.id}`),

          
        },
    ],
  },
]);

export default router;
