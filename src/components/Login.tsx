import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";
import Layout from "./Layout";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/profile";
      } else {
        alert(data.message || "Login failed");
      }
    } catch {
      alert("Error connecting to server");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-green-600">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleLogin}
          className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md"
        >
          <div className="flex justify-center mb-6">
            <User className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Login
          </button>
        </motion.form>
      </div>
    </Layout>
  );
};

export default Login;