import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from 'axios';
import { loginSchema } from "../src/utility/validationSchema.js";

const Login = () => {
  const loginHandler = async (values) => {
    try {
      const response = await axios.post('http://localhost:8082/user/login', values);
      console.log('Login successful:', response);
      // Handle successful login
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      await loginHandler(values);
      action.resetForm();
    }
  });

  console.log(formik.errors);
  return (
    <>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">One Kart</h3>
        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}

          <div className="flex items-center justify-between mt-4">
            <a href="/reset-password" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
              Forget Password?
            </a>

            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Login in
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
        <Link to="/sign" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
          Register
        </Link>
      </div>
    </>
    
  );
};

export default Login;
