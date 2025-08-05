"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./login.module.css";

const LoginPage = () => {
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
        formData.password === "admin@123"
      ) {
        router.push("/admin-dashboard");
      } else if (user) {
        router.push("/home");
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
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image
          src="/2.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.rightPanel}>
        {view === "login" && (
          <>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => setView("register")}>Register</button>
            <button onClick={() => setView("forgotPassword")}>
              Forgot Password
            </button>
          </>
        )}
        {view === "register" && (
          <>
            <h2>Register</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => setView("login")}>Back to Login</button>
          </>
        )}
        {view === "forgotPassword" && (
          <>
            <h2>Forgot Password</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your registered email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button onClick={handleForgotPassword}>Update Password</button>
            <button onClick={() => setView("login")}>Back to Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
