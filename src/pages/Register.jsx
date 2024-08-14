import { useState } from "react";

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

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userInfo);
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
        </div>
      </div>
    </div>
  );
};

export default Register;
