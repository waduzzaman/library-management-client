
import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
  const { signIn, signInWithGoogle, user } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    try {
      await signIn(email, password);
      console.log('Login successful');
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      }).then(() => {
        navigate(location?.state ? location.state : '/');
      });
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email or password',
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Travel | Login</title>
      </Helmet>
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-center text-3xl mb-10">Please Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
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
          <div className="mb-6">
            <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
        {error && <p className="text-center text-red-500 my-2">{error}</p>}
        {user && <p className="text-center">Logged in as: {user.email}</p>}
        <div className="flex gap-3 items-center justify-center px-2">
          <button className="bg-gray-800 text-white px-20 py-5 rounded-md" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          {/* Removed the commented-out line for sign in with GitHub */}
        </div>
        <p className="text-center my-5">
          Do not have an account?{' '}
          <Link className="font-bold text-blue-800" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>

  );
};

export default Login;
