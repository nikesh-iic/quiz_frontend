import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth";

const Register = () => {


  const handleRegister=(e)=>{
    // e.preventDefault();
      console.log(userInfo);
  }
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const validateData = () => {
    const newError = {};
    // checked username
    if (userInfo.username.trim() === "") {
      newError.username = "Username cannot be empty!";
    } else {
      delete errors.username;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userInfo.email.match(pattern)) {
      newError.email = "Enter a valid email";
    } else {
      delete errors.email;
    }

    setErrors({ ...newError });
    return Object.keys(newError).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateData()) {
      const message = await register(userInfo);
      if (message.error) {
        setServerError(message.message);
        return;
      }
      navigate("/verification-sent");
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-4 space-y-6 bg-white w-96">
        <h1 className="text-2xl text-center font-bold p-2 text-gray-700">
          Register
        </h1>
        <div className="space-y-7 mt-8">
          <div>
            <label
              htmlFor="username"
              className="block font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="mt-3 p-2 w-full border"
              value={userInfo.username}
              onChange={handleUserInfoChange}
            />
            {errors.username && (
              <p className="text-red-600">{errors.username}</p>
            )}
            {serverError?.username && (
              <p className="text-red-600">{serverError.username[0]}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="mt-3 p-2 w-full border"
              value={userInfo.email}
              onChange={handleUserInfoChange}
            />
            {serverError?.email && (
              <p className="text-red-600">{serverError.email[0]}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password1"
              className="block font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password1"
              className="mt-3 p-2 w-full border"
              value={userInfo.password1}
              onChange={handleUserInfoChange}
            />
            {serverError?.password1 && (
              <p className="text-red-600">{serverError.password1[0]}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password2"
              className="block font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              className="mt-3 p-2 w-full border"
              value={userInfo.password2}
              onChange={handleUserInfoChange}
            />
            {serverError?.password2 && (
              <p className="text-red-600">{serverError.password2[0]}</p>
            )}
          </div>
<<<<<<< HEAD
          <button className="p-2 w-full border bg-indigo-500 text-white" onClick={handleRegister}>
=======
          <button
            className="p-2 w-full border bg-indigo-500 text-white"
            onClick={handleRegister}
          >
>>>>>>> 0b77ebd620691072257002766f6403b7118b2638
            Register
          </button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
