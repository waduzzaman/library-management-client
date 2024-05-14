import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import {} from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, signInWithGoogle, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await signIn(email, password);
      // console.log("Login successful");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
      }).then(() => {
        navigate(location?.state ? location.state : "/");
      });
    } catch (error) {
      console.error(error);
      setError("Invalid email or password");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title> Library | Login</title>
      </Helmet>
      <div className="flex shadow-2xl rounded-lg ">
        <div className=" bg-white-100 p-8 max-w-md w-full">
          <h2 className="text-center text-3xl font-bold mb-10">Sign in</h2>
          <div className=" text-center mb-5">
            <button
              className="border-2 p-3 rounded-full mr-5 hover:bg-red-500 "
              onClick={signInWithGoogle}
            >
              <FaGoogle className=" " />
            </button>
            <button
              className="border-2 p-3 rounded-full mr-5 hover:bg-red-500"
              onClick={signInWithGoogle}
            >
              <FaFacebookF />
            </button>
            <button
              className="border-2 p-3 rounded-full hover:bg-red-500"
              onClick={signInWithGoogle}
            >
              <FaGithub />
            </button>
            <p className="py-1"> or use your account</p>
          </div>

          <form onSubmit={handleLogin}>
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

            <div className="text-center m-10 border rounded-full py-2 bg-red-600 text-white font-bold hover:bg-green-600 hover:shadow-2xl transition-all duration-300">
              <button className="">SIGN IN</button>
            </div>
          </form>
          {error && <p className="text-center text-red-500 my-2">{error}</p>}
          {user && <p className="text-center">Logged in as: {user.email}</p>}
        </div>

        <div className="bg-red-500 p-8 max-w-md w-full text-white">
          <h2 className="text-center text-3xl  font-bold mb-10 mt-20">
            Do not have an account?{" "}
          </h2>
          <p className="text-center text-  mb-10">
            Enter your personal details and start <br />
            journey with us{" "}
          </p>

          <p className="text-center m-10 border rounded-full py-2 p hover:bg-green-600">
            <Link className="font-bold text-bold " to="/register">
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
