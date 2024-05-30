

import { useState, useEffect } from 'react';

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // fetch('https://community-library-server.vercel.app/programs')
    fetch('https://community-library-server.vercel.app/programs')
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error('Error fetching programs:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center p-3 border bg-emerald-500 text-white">Library Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program._id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white"
          >
            {program.image && (
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
              <p className="text-gray-600 mb-2">{program.description}</p>
              <div className="flex justify-between text-gray-800">
                <p>
                  <span className="font-bold">Date:</span> {program.date}
                </p>
                <p>
                  <span className="font-bold">Time:</span> {program.time}
                </p>
              </div>
              {/* Display other details here */}
            </div>
            {/* <Link
              to={`/programs/${program._id}`}
              className="block w-full bg-blue-500 text-white text-center py-2 hover:bg-blue-600"
            >
              View Details
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

