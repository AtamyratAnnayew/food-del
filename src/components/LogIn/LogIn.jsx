import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import PropTypes from 'prop-types';

const LogIn = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  LogIn.propTypes = {
    setShowLogin: PropTypes.string.isRequired,
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const endpoint = currState === "Login" ? "/api/login" : "/api/signup";

    try {
      const response = await axios.post(endpoint, data);
      console.log("Server Response:", response.data);
      // You can save token or redirect here
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("An error occurred: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="logIn fixed inset-0 z-10 bg-black/60 grid place-items-center p-4">
      <form
        onSubmit={onSubmitHandler}
        className="logInContainer w-full max-w-md bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-6"
      >
        {/* Header */}
        <div className="logInTitle flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {currState}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            className="w-5 h-5 cursor-pointer"
            src={assets.cross}
            alt="Close"
          />
        </div>

        {/* Inputs */}
        <div className="logInInputs flex flex-col gap-4">
          {currState === "Sign up" && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              required
            />
          )}
          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-lg transition"
        >
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>

        {/* Terms */}
        <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <input type="checkbox" required className="accent-blue-600" />
          I agree to the Terms of Use & Privacy Policy
        </label>

        {/* Switch between login/signup */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          {currState === "Login" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className="text-blue-500 font-medium cursor-pointer"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-blue-500 font-medium cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
