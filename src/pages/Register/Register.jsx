import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify"; //
import { useLocation, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Password verification
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
    const lengthRequirement = password.length >= 6;

    if (!lowercaseRegex.test(password)) {
      setError("Password must contain at least one lowercase letter");
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    if (!uppercaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter");
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!numberRegex.test(password)) {
      setError("Password must contain at least one number");
      toast.error("Password must contain at least one number");
      return;
    }
    if (!specialRegex.test(password)) {
      setError("Password must contain at least one special character [$&+,:;=?@#|'<>.-^*()%!]");
      toast.error("Password must contain at least one special character [$&+,:;=?@#|'<>.-^*()%!]");
      return;
    }

    if (!lengthRequirement) {
      setError("Password length must be at least 6 characters");
      toast.error("Password length must be at least 6 characters");
      return;
    }

    // If password meets requirements, proceed with registration
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        // toast.success("Registration successful");
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
        }).then(() => {
          navigate(location?.state ? location.state : "/");
        });

        // update profile:
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo, // Set the photo URL here
        });
      })
      // .then(() => console.log("profile updated"))
      .catch((error) => {
        console.error(error);
        setError("Registration failed");
        // toast.error("Registration failed");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registration failed",
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center b">
      <Helmet>
        <title> Library | Registration</title>
      </Helmet>
      <div className="flex rounded-2xl shadow-2xl ">
        <div className="text-white p-8 max-w-md w-full bg-red-500">
          <h2 className="text-center text-3xl font-bold mt-40 ">
            Already have an account?
          </h2>
          <p className="text-center my-5"> Sign In with your credentials</p>

          <div className="text-center m-10 border rounded-full py-2 bg-red-600 text-white font-bold hover:bg-green-600 hover:shadow-2xl transition-all duration-300">
            <Link className="font-bold text-white-800" to="/login">
              SIGN IN
            </Link>
          </div>
        </div>
        <div className="bg-white p-8 max-w-md w-full">
          <h2 className="text-center text-3xl font-bold mb-16">
            Create Account
          </h2>

          <form onSubmit={handleRegister}>
            <div className="mb-6">
              {/* <label className="block mb-1 font-semibold">Name</label> */}
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              {/* <label className="block mb-1 font-semibold">Email</label> */}
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              {/* <label htmlFor="photoURL" className="block mb-1 font-semibold">
                Photo URL
              </label> */}
              <input
                type="url"
                id="photoURL"
                name="photo"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              {/* <label className="block mb-1 font-semibold">Password</label> */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                <span
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="mb-6"></div>

            <div className="text-center m-10 border rounded-full py-2 bg-red-600 text-white font-bold hover:bg-green-600 hover:shadow-2xl transition-all duration-300">
              <button className="w-full text-white font-bold">SIGN UP</button>
            </div>
          </form>
          {error && <p className="text-center text-red-500 my-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
