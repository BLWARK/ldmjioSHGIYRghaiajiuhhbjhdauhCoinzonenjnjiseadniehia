"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import users from "@/data/authors";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fungsi Login
  const login = (email, password) => {
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem("user", JSON.stringify(matchedUser)); // Simpan di localStorage
      return true;
    } else {
      return false;
    }
  };

  // Fungsi Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Hapus dari localStorage
  };

  // Ambil data user dari localStorage jika ada saat pertama kali aplikasi dimuat
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
