"use client";

import { useForm } from "react-hook-form";
import authService from "../services/authService.js";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Placeholder function for form submission
    console.log("Form Data: ", data);
    const result = await authService.login(data.email, data.password);
    console.log(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.password ? "border-red-500" : ""
              }`}
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input
                type="checkbox"
                id="remember"
                className="mr-2 leading-tight"
              />
              <label className="text-gray-700" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#" className="text-indigo-500 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <a href="/signup" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
