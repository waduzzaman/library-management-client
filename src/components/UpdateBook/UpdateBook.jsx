import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const UpdateBook = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext) || {};

  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`https://community-library-server.vercel.app/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        // console.log("The returned data of the server", data);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    // this email from the login user email
    const email = user.email;
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const quantity = Number(form.quantity.value) || 0;
    const author = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const ratings = Number(form.ratings.value) || 0;
    const content = form.content.value;

    const newBook = {
      email,
      image,
      name,
      quantity,
      author,
      category,
      description,
      ratings,
      content,
    };

    // console.log(newBook);

    fetch(`https://community-library-server.vercel.app/updateBooks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Response data:", data); // Log response data for debugging
      if (data.insertedId) {

        // React Toastify 
        toast.success("Success Notification !", {
            position: "top-center"
          });
        <ToastContainer />

        // toastify ends 

        Swal.fire({
          title: "Success!",
          text: "Spot Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } else {
        console.error("Data insert failed:", data); // Log data if insert failed
      }
    })
    .catch((error) => {
        console.error("Error updating book:", error); // Log any fetch or processing errors
        Swal.fire({
          title: "Error!",
          text: "An error occurred while updating the book.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
      

   
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
       <Helmet>
        <title> Library | Update Book</title>
      </Helmet>
      <h2 className="text-4xl font-extrabold text-center text-black mb-5">
        Update Book
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Book Image
              </span>
            </label>
            <input
              type="text"
              defaultValue={book.image}
              name="image"
              placeholder="book image"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Book Title
              </span>
            </label>
            <input
              type="text"
              defaultValue={book.name}
              name="name"
              placeholder="book name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Quantity
              </span>
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={book.quantity}
              placeholder="Quantity of the Book"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Author
              </span>
            </label>
            <input
              type="text"
              name="author"
              defaultValue={book.author}
              placeholder="Author Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Category
              </span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={book.category}
              placeholder="Category"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Description
              </span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={book.description}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Ratings
              </span>
            </label>
            <input
              type="number"
              defaultValue={book.ratings}
              name="ratings"
              placeholder="ratings"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Content
              </span>
            </label>
            <input
              type="text"
              name="content"
              defaultValue={book.content}
              placeholder="content"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex mb-8"></div>

        <input
          type="submit"
          value="Update Book"
          className="btn btn-block text-lg bg-emerald-600"
        />
      </form>
    </div>
  );
};

export default UpdateBook;
