import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BasicCalculator from "./components/BasicCalculator";
import AdvancedCalculator from "./components/AdvancedCalculator";
import UnitConverter from "./components/UnitConverter";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";
import Buy from "./pages/Buy";
import { Pi } from "@pinetwork-js/sdk";
import "./App.css";
// import FullscreenPrompt from "./components/FullscreenPrompt";


function App() {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("pi_user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("❌ Error parsing user from localStorage:", error);
      return null;
    }
  });

  useEffect(() => {
    const initPi = async () => {
      try {
        if (!Pi || !Pi.init) {
          console.error("❌ Pi SDK is not available.");
          return;
        }

        Pi.init({
          version: "2.0",
          sandbox: process.env.NODE_ENV !== "production", // Use sandbox in dev
        });

        console.log("✅ Pi SDK Initialized");
      } catch (error) {
        console.error("❌ Error initializing Pi SDK:", error);
      }
    };

    initPi();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="app-container">
        {/* <FullscreenPrompt /> */}
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basic" element={<BasicCalculator />} />
              <Route path="/advanced" element={<AdvancedCalculator />} />
              <Route path="/unit-converter" element={<UnitConverter />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
