import { useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  // Single state object for holding all errors
  const [errors, setErrors] = useState({});

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Function to validate form
  const validateForm = () => {
    let newErrors = {};

    // Validate username
    if (userInfo.username.trim() === "") {
      newErrors.username = "Username cannot be empty.";
    } else {
      delete newErrors.username;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userInfo.email)) {
      newErrors.email = "Invalid email address.";
    } else {
      delete newErrors.email;
    }

    // Validate password1
    if (userInfo.password1.trim() === "") {
      newErrors.password1 = "Password cannot be empty.";
    } else {
      delete newErrors.password1;
    }

    // Validate password2
    if (userInfo.password1 !== userInfo.password2) {
      newErrors.password2 = "Passwords do not match.";
    } else {
      delete newErrors.password2;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Do not proceed if form is invalid
    }
    // Proceed with form submission logic here
    console.log("Form submitted successfully!");
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
              <p className="text-red-500">{errors.username}</p>
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
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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
            {errors.password1 && (
              <p className="text-red-500">{errors.password1}</p>
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
            {errors.password2 && (
              <p className="text-red-500">{errors.password2}</p>
            )}
          </div>
          {/* Input fields remain unchanged */}
          <button
            type="submit"
            className="p-2 w-full border bg-indigo-500 text-white"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
