"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import translations from "@/trancelate/trancelate";

const LoginPage = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].login;
  const [view, setView] = useState<"login" | "register" | "forgotPassword">(
    "login",
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    newPassword: "",
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) =>
        u.email === formData.email && u.password === formData.password,
    );

    if (typeof window !== "undefined") {
      if (
        formData.email === "admin@enkonix.in" &&
        formData.password === "admin123"
      ) {
        router.push("/admin-dashboard");
      } else if (user) {
        router.push("/home1");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  const handleRegister = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: any) => u.email === formData.email)) {
      alert("Email already registered");
      return;
    }
    users.push({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    setView("login");
  };

  const handleForgotPassword = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((u: any) => u.email === formData.email);

    if (userIndex === -1) {
      alert("Email not found");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    users[userIndex].password = formData.newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Password updated successfully");
    setView("login");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute z-20 top-4 right-4">
        <LanguageSelector />
      </div>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2.png"
          alt="Background Image"
          fill
          className="object-cover w-full h-full opacity-30 dark:opacity-20"
          priority
        />
      </div>
      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 border border-blue-100 shadow-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl dark:border-gray-800 backdrop-blur-md">
        {view === "login" && (
          <>
            <h2 className="mb-6 text-3xl font-bold text-center text-blue-700 dark:text-blue-400">
              {t.login}
            </h2>
            <input
              type="email"
              name="email"
              placeholder={t.email}
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-4 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="email"
            />
            <input
              type="password"
              name="password"
              placeholder={t.password}
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-6 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="current-password"
            />
            <button
              onClick={handleLogin}
              className="w-full py-3 mb-3 font-semibold text-white transition duration-150 bg-blue-600 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {t.login}
            </button>
            <div className="flex justify-between gap-2">
              <button
                onClick={() => setView("register")}
                className="w-1/2 py-2 font-medium text-blue-700 transition bg-white border border-blue-400 rounded-lg dark:text-blue-300 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                {t.register}
              </button>
              <button
                onClick={() => setView("forgotPassword")}
                className="w-1/2 py-2 font-medium text-blue-700 transition bg-white border border-blue-400 rounded-lg dark:text-blue-300 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                {t.forgotPassword}
              </button>
            </div>
          </>
        )}
        {view === "register" && (
          <>
            <h2 className="mb-6 text-3xl font-bold text-center text-blue-700 dark:text-blue-400">
              {t.register}
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder={t.firstName}
                value={formData.firstName}
                onChange={handleInputChange}
                className="col-span-1 px-4 py-3 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoComplete="given-name"
              />
              <input
                type="text"
                name="lastName"
                placeholder={t.lastName}
                value={formData.lastName}
                onChange={handleInputChange}
                className="col-span-1 px-4 py-3 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoComplete="family-name"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder={t.email}
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-4 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="email"
            />
            <input
              type="password"
              name="password"
              placeholder={t.password}
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-4 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder={t.confirmPassword}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-6 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            <button
              onClick={handleRegister}
              className="w-full py-3 mb-3 font-semibold text-white transition duration-150 bg-blue-600 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {t.register}
            </button>
            <button
              onClick={() => setView("login")}
              className="w-full py-2 font-medium text-blue-700 transition bg-white border border-blue-400 rounded-lg dark:text-blue-300 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              {t.backToLogin}
            </button>
          </>
        )}
        {view === "forgotPassword" && (
          <>
            <h2 className="mb-6 text-3xl font-bold text-center text-blue-700 dark:text-blue-400">
              {t.forgotPassword}
            </h2>
            <input
              type="email"
              name="email"
              placeholder={t.enterRegisteredEmail}
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-4 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="email"
            />
            <input
              type="password"
              name="newPassword"
              placeholder={t.enterNewPassword}
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-4 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder={t.confirmNewPassword}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-6 text-gray-900 transition border border-blue-200 rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            <button
              onClick={handleForgotPassword}
              className="w-full py-3 mb-3 font-semibold text-white transition duration-150 bg-blue-600 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {t.updatePassword}
            </button>
            <button
              onClick={() => setView("login")}
              className="w-full py-2 font-medium text-blue-700 transition bg-white border border-blue-400 rounded-lg dark:text-blue-300 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              {t.backToLogin}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
