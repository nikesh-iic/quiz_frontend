import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password1: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),

    //   confirmpassword = Yup.string().oneOF([Yup.ref('password1'), null], 'Passwords must match')
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-3xl font-semibold mb-6 text-gray-800">
          Login
        </h1>
        <Formik
          initialValues={{
            email: "",
            password1: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form>
              {" "}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    placeholder="Enter your email"
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                </label>
              </div>
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
              <div className="mb-6">
                <label
                  htmlFor="password1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                  <input
                    type="password"
                    name="password1"
                    id="password1"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    placeholder="Enter your password"
                    onChange={handleChange("password1")}
                  />
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </Formik>
        <p className="text-sm mt-3">
          Don&#39;t have an account?
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
