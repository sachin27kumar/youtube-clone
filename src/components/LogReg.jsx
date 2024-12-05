import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogReg({ setUser }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Mock login logic
      if (
        formData.email === userData.email &&
        formData.password === "password123" // Replace with actual password checking
      ) {
        setUser(userData); // Set user data
        alert("Login successful!");
        navigate("/"); // Redirect to homepage
      } else {
        alert("Invalid email or password!");
      }
    } else {
      // Mock registration logic
      alert("Registration successful! You can now log in.");
      setIsLogin(true); // Switch to login
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white p-4">
      <div className="w-full max-w-lg bg-white text-black p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Login to YouTube" : "Create Your YouTube Account"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your username"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-500 font-medium hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogReg;
