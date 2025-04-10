import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./About.css"; // Ensure styling is defined

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the <strong>Advanced Calculator App</strong> – your go-to platform for advanced calculations and exclusive <strong>Comic PDF sales</strong>. Whether you're crunching numbers or enjoying epic comics, we blend productivity and entertainment in one seamless experience.
      </p>

      <h2>Our Mission</h2>
      <p>
        We aim to offer a <strong>smart, user-friendly calculator</strong> with added joy – <strong>premium comics</strong> to spark your imagination and relax your brain.
      </p>

      <h2>About the Developer</h2>
      <p>
        <strong>Aditya</strong>, the creator of this app, is a tech enthusiast and comic lover who crafts beautiful digital tools using <strong>JavaScript, React, and modern design</strong> principles.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>📌 Scientific & Basic Calculator</li>
        <li>📌 Unit Converter (Length, Weight, Temperature, etc.)</li>
        <li>📌 Dark/Light Theme Toggle</li>
        <li>📌 Calculation History</li>
        <li>📌 Buy & Download Comic PDFs</li>
        <li>📌 Mobile-Responsive with Sidebar Navigation</li>
      </ul>

      <h2>Connect with Us</h2>
      <div className="social-links">
        <a href="https://facebook.com/aditya.calculatorapp" target="_blank" rel="noopener noreferrer" className="social-icon fb">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/Adityastark01" target="_blank" rel="noopener noreferrer" className="social-icon tw">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/aditya_singh__07_" target="_blank" rel="noopener noreferrer" className="social-icon ig">
          <FaInstagram />
        </a>
        <a href="mailto:aadi321098@gmail.com" className="social-icon mail">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default About;
