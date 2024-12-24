"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const SignUpModal = ({ onClose, onShowThankYou }) => {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  // Handle perubahan nilai input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Hapus error setelah input berubah
  };

  // Validasi form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.nickname) newErrors.nickname = "Nickname is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.address) newErrors.address = "Address is required";
    return newErrors;
  };

  // Handle tombol Sign-Up
  const handleSignUp = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onShowThankYou();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg p-6 w-[400px]">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-black">Sign Up</h2>

        {/* Input Fields */}
        <div className="space-y-3">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="nickname"
              placeholder="Nickname"
              value={formData.nickname}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.nickname && (
              <p className="text-red-500 text-sm mt-1">{errors.nickname}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Tombol Sign-Up */}
        <button
          onClick={handleSignUp}
          className="w-full bg-main text-white py-4 my-4 rounded hover:bg-opacity-80"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
