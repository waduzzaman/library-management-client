
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const AddProgram = () => {
    const { user } = useContext(AuthContext) || {};

    const handleAddProgram = (event) => {
        event.preventDefault();        

        // Get user email from context
        const email = user?.email; 

        // Extract data from the form
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;        
        const date = form.date.value;
        const time = form.time.value;

    
        // Construct new program object
        const newProgram = { email, image, title, description, date, time };

        // Send data to the server
        fetch('https://community-library-server.vercel.app/programs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProgram)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                // Show success message using SweetAlert
                Swal.fire({
                    title: 'Success!',
                    text: 'Program Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        });
    };

    return (
        <div className="bg-gray-100 mx-auto p-4 ">
           <h1 className="text-3xl font-bold mb-8 text-center p-3 border bg-emerald-500 text-white">Add A Program</h1>
            <form onSubmit={handleAddProgram} className="max-w-lg mx-auto">
                <div className="mb-6">
                    <label className="block text-lg font-bold mb-2 text-gray-800">Program Image</label>
                    <input type="text" name="image" placeholder="Program image" className="input input-bordered w-full" />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-bold mb-2 text-gray-800">Program Title</label>
                    <input type="text" name="title" placeholder="Program title" className="input input-bordered w-full" />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-bold mb-2 text-gray-800">Description</label>
                    <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                </div>
                <div className="mb-6 flex justify-between">
                    <div className="w-1/2 mr-2">
                        <label className="block text-lg font-bold mb-2 text-gray-800">Date</label>
                        <input type="date" name="date" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2 ml-2">
                        <label className="block text-lg font-bold mb-2 text-gray-800">Time</label>
                        <input type="time" name="time" className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value="Add Program" className="btn btn-block text-lg bg-blue-600" />
            </form>
        </div>
    );
};

export default AddProgram;

