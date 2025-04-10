import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: April 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to the Advanced Calculator App. This Privacy Policy outlines how we handle your data while using the app, including features such as basic & scientific calculations, history tracking, PDF/template purchases, and Pi payment integrations.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We may collect limited information to support app functionality:
      </p>
      <ul>
        <li><strong>Calculation History:</strong> Stored locally on your device for your reference only.</li>
        <li><strong>PDF Purchase Records:</strong> Stored securely with your Pi username (if logged in) to enable re-download.</li>
      </ul>

      <h2>3. Use of Pi SDK</h2>
      <p>
        When signing in or making purchases with Pi, we access your Pi username (and transaction details) securely through the Pi SDK. This data is used only to verify payments and personalize your experience.
      </p>

      <h2>4. Cookies & Tracking</h2>
      <p>
        We do not use cookies or any third-party tracking tools. Your activity is not monitored or sold.
      </p>

      <h2>5. Data Security</h2>
      <p>
        Your data is stored securely. Purchase records are only linked to your Pi username. No financial or sensitive information is stored on our servers.
      </p>

      <h2>6. Future Features</h2>
      <p>
        If we introduce template purchases or cloud sync, we’ll update this policy accordingly and request permission where required.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You may request deletion of your purchase records by contacting us.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy. All changes will be posted here, and your continued use constitutes acceptance of the changes.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions or concerns, contact us at: <strong>aadi321098@gmail.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
