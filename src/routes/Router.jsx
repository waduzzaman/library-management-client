import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";


import ViewDetails from "../pages/ViewDetails/ViewDetails";
import MyList from "../pages/MyList/MyList";
import AddBook from "../pages/AddBook/AddBook";
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
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
 
      },

      {
        path: "/view-details/:id",
        element: <ViewDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
            <AddBook/>           
          </PrivateRoute>
        ),
      },
    //   {
    //     path: "/update-tourists-spot/:id",
    //     element: (
    //       <PrivateRoute>
    //         <UpdateTouristsSpot />
    //       </PrivateRoute>
    //     ),
    //     loader: ({ params }) =>fetch(`https://tourism-management-server-sable.vercel.app/spots${params.id}`),
    //   },
    ],
  },
]);

export default router;
