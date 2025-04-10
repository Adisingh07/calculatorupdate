import { Pi } from "@pinetwork-js/sdk";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export const usePiSignIn = () => {
  const { setUser } = useContext(UserContext);

  const signIn = async () => {
    try {
      const scopes = ["username", "payments"];
       const backendUrl = "https://backend-3e4n.onrender.com"; 

      // Authenticate with Pi Network
      const { accessToken } = await Pi.authenticate(scopes, onIncompletePaymentFound);

      // Verify token with your backend
      const res = await axios.post(
        `${backendUrl}/verify-token`,
        { accessToken }
      );

      // If successful, store user
      if (res.data.success) {
        const user = res.data.user;
        localStorage.setItem("pi_user", JSON.stringify(user));
        setUser(user);
      } else {
        alert("❌ Sign-in failed. Please try again.");
      }
    } catch (err) {
      console.error("🚫 Error during Pi sign-in:", err);
    }
  };

  return { signIn };
};

// Optional: handle incomplete payments
const onIncompletePaymentFound = (payment) => {
  console.warn("⚠️ Incomplete payment found:", payment);
};
