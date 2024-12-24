"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { IoClose } from "react-icons/io5";

const LoginModal = ({ onClose, onSwitchToSignUp }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (login(email, password)) {
      onClose();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 text-black 2xl:px-0 px-3">
      <div className="relative bg-white rounded-lg p-6 w-[400px] h-[400px] shadow-lg">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <IoClose size={24} />
        </button>

        {/* Judul Modal */}
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Input Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Input Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Pesan Error */}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Tombol Login */}
        <button
          onClick={handleLogin}
          className="w-full bg-main text-white py-2 rounded hover:bg-opacity-80"
        >
          Login
        </button>

        {/* Tombol Switch ke Sign Up */}
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToSignUp}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
