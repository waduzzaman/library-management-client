import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";


const AddBook = () => {
    const {user} = useContext(AuthContext) ||{};

    const handleAddBook = event => {
        event.preventDefault();        
        // this email from the loggin user email
        const email=user.email; 

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = Number(form.quantity.value) || 0;
        const author = form.author.value;
        const category = form.category.value;
        const description = form.description.value;        
        const ratings = Number(form.ratings.value) || 0;        
        const content=form.content.value;        
       
        const newBook = {email, image, name, quantity, author,category,description,ratings, content };

        // console.log(newBook);

        // Send data to the server
        fetch('https://community-library-server.vercel.app/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        });
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
             <Helmet>
        <title> Library | Add Book</title>
      </Helmet>
            <h2 className="text-4xl font-extrabold text-center text-black mb-5">Add A Book</h2>
            <form onSubmit={handleAddBook}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Book Image</span>
                        </label>
                        <input type="text" name="image" placeholder="book image" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Book Title</span>
                        </label>
                        <input type="text" name="name" placeholder="book name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Quantity of the Book" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Author</span>
                        </label>
                        <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Ratings</span>
                        </label>
                        <input type="number" name="ratings" placeholder="ratings" className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black text-lg font-bold">Content</span>
                        </label>
                        <input type="text" name="content" placeholder="content" className="input input-bordered w-full" />
                    </div>
                
                </div>
                <div className="md:flex mb-8">               
                
                </div>
               
                <input type="submit" value="Add Book" className="btn btn-block text-lg bg-emerald-600" />
            </form>
        </div>
    );
};


export default AddBook;