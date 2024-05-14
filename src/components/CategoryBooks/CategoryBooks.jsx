
import { Link } from "react-router-dom";

const CategoryBooks = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center p-3 border bg-emerald-500 text-white"> Book Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src="https://static.vecteezy.com/system/resources/previews/008/998/425/large_2x/fantastic-blurry-and-bokeh-dark-blue-theme-background-in-the-mystry-cave-photo.JPG"
            alt="Mystery"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Mystery</h2>
            <Link
              to="/mystery"
              className="block text-center py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Mystery Books
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src="https://img.freepik.com/free-photo/vintage-grunge-blue-concrete-texture-studio-wall-background-with-vignette_1258-28387.jpg"
            alt="Thriller"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Thriller</h2>
            <Link
              to="/thriller"
              className="block text-center py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Thriller Books
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src="https://res.cloudinary.com/jerrick/image/upload/v1657151395/62c61fa3060ebe001e50e519.jpg"
            alt="Fiction"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Fiction</h2>
            <Link
              to="/fiction"
              className="block text-center py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Fiction Books
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src="https://t4.ftcdn.net/jpg/05/50/00/39/360_F_550003977_liuYW1nVToozE34y53NaP4cciF4HMLFw.jpg"
            alt="Fantasy"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Fantasy</h2>
            <Link
              to="/fantasy"
              className="block text-center py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Fantasy Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBooks;

