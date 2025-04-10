import React, { useState, useEffect,useContext } from "react";
import UserContext from "../context/UserContext";
import { Pi } from "@pinetwork-js/sdk";
import "./Home.css"; // Assuming you'll name the CSS file this

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  // On mount, load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("piUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSignIn = async () => {
    try {
      if (!Pi) {
        console.error("Pi SDK is not loaded.");
        return;
      }

      const scopes = ["username", "payments"];
      Pi.authenticate(scopes, (result) => {
        if (result.user) {
          setUser(result.user);
          localStorage.setItem("pi_user", JSON.stringify(result.user));
        } else {
          console.error("❌ Authentication failed", result);
        }
      });
    } catch (error) {
      console.error("❌ Sign-in error:", error);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to Aditya's Calculator & Converter App</h1>
      <p>Your all-in-one tool for calculations, conversions, and Pi transactions.</p>
      <p>Here you can Buy Comics PDFs</p>

      {!user ? (
        <button className="sign-in-btn" onClick={handleSignIn}>
          Sign in with Pi
        </button>
      ) : (
        <div className="user-info">
          <h3>Welcome, {user.username}!</h3>
          <p>You're signed in using Pi Network.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
