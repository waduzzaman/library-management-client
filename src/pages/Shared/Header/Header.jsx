import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { PiSignInBold } from "react-icons/pi";
import Weather from "../../../components/Weather/Weather";
import DateTime from "../../../components/DateTime/DateTime";

const Header = () => {
  const { user, logOut } = useContext(AuthContext) || {};
  const [showUserName, setShowUserName] = useState(false);

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDarkModeEnabled = JSON.parse(localStorage.getItem("darkMode"));
    setDarkMode(isDarkModeEnabled);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleLogOut = () => {
    logOut().catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li >
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-books">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/add-book">Add Book</NavLink>
      </li>
      <li>
        <NavLink to="/borrowed-books">Borrowed Books</NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar ${darkMode ? "bg-black" : "bg-emerald-600"}`}>
      <div className="navbar-start pb-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="">
          <img className="w-16" src="logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold ">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center">
        <div className="flex mr-5">    <DateTime />
        <Weather /></div>
    

      

        {user ? (
          <div
            className="flex items-center relative"
            onMouseEnter={() => setShowUserName(true)}
            onMouseLeave={() => setShowUserName(false)}
          >
            {user.photoURL && (
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full mr-2"
                />
                {showUserName && (
                  <span className="absolute top-[25px] left-[20px] bg-white p-1 rounded">
                    {user.displayName}
                  </span>
                )}
              </div>
            )}
            <button onClick={handleLogOut} className="btn btn-sm">
              <PiSignInBold />
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <div>
              <Link to="/login">
                <button className="btn btn-sm">
                  <PiSignInBold /> Login
                </button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <button className="btn btn-sm">Register</button>
              </Link>
            </div>
          </div>
        )}
          <button
          onClick={toggleDarkMode}
          className="btn btn-sm mr-2 ml-2 bg-gray-600 outline-"
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Header;


