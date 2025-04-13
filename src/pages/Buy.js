import React, { useState, useEffect, useContext } from "react";
import { Pi } from "@pinetwork-js/sdk";
import axios from "axios";
import "./BuyPage.css";
import UserContext from "../context/UserContext";

const BuyPage = () => {
  const { user } = useContext(UserContext);
  const [purchased, setPurchased] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  const [pdfs, setPdfs] = useState([
    {
      id: 1,
      name: "Captain America & iron main",
      image: "/pdf-images/captain-america-iron-man-4.jpg",
      price: 1,
      driveLink:
        "https://drive.google.com/file/d/1_co_j84ZB25yISAZKrvnZxwC-FXmxl8R/view?usp=sharing",
    },
    {
      id: 2,
      name: "Baka To Boing",
      image: "/pdf-images/BakaToBoing.jpg",
      price: 1,
      driveLink:
        "https://drive.google.com/file/d/1JznwcreJ96tX0CQ7-qttxka45nq1xaz-/view?usp=sharing",
    },
    {
      id: 3,
      name: "Ironman Aur Ramrahim",
      image: "/pdf-images/ironman_aur_ramrahim.jpg",
      price: 1,
      driveLink:
        "https://drive.google.com/file/d/1DX_uN3pdml0V4Ino7QUmvbZPmCDzQx3Z/view?usp=sharing",
    },
    {
      id: 4,
      name: "DC vs Marvel",
      image: "/pdf-images/marveldc.webp",
      price: 1,
      driveLink:
        "https://drive.google.com/file/d/1F_jKzwqP8k9zdvQgi6bAan6eXNIscIwC/view?usp=sharing",
    },
    {
      id: 5,
      name: "Manga Comic",
      image: "/pdf-images/manga_comic.jpg",
      price: 1,
      driveLink:
        "https://drive.google.com/file/d/1BQqlxSgssrjCPYutlKtnlVMJhiOrwaMv/view?usp=sharing",
    },
    {
      id: 6,
      name: "Infinity War",
      image: "/pdf-images/infinitywar.jpg",
      price: 1,
      driveLink:
        "https://drive.google.com/file/d/1PzFcGBzfDqlllBihc7v6cv5qdFkXcnxi/view?usp=sharing",
    },
    {
      id: 7,
      name: "Otome No Iroha ",
      image: "/pdf-images/otome-no-iroha.jpg",
      price: 1,
      driveLink:
        "https://drive.google.com/file/d/1tRIXSN82ff-d4aT6zXmQUKf8GxUISbDh/view?usp=sharing",
    },
  ]);

  // Fetch purchased PDFs on mount
  useEffect(() => {
    if (user) {
      axios
        .get(
          `${import.meta.env.REACT_APP_BACKEND_URL}/api/purchases/${user.username}`
        )
        .then((res) => setPurchased(res.data.purchased || []))
        .catch((err) => console.error("Failed to fetch purchases", err));
    }
  }, [user]);

  const handleBuy = async (pdf) => {
    if (!user) {
      alert("Please sign in with Pi first.");
      return;
    }

    setLoadingId(pdf.id);

    try {
      const payment = await Pi.openPayment({
        amount: pdf.price,
        memo: `Buy ${pdf.name}`,
        metadata: { id: pdf.id, username: user.username },

        // Send paymentId to backend for approval
        onReadyForServerApproval: async (paymentId) => {
          try {
            await axios.post(
              `${import.meta.env.REACT_APP_BACKEND_URL}/api/approve-payment`,
              {
                paymentId,
              }
            );
            console.log("✅ Payment approved on server.");
          } catch (error) {
            console.error("❌ Server approval failed", error);
          }
        },

        // Send txid + paymentId to backend for completion, and record purchase
        onReadyForServerCompletion: async (paymentId, txid) => {
          try {
            await axios.post(
              `${import.meta.env.REACT_APP_BACKEND_URL}/api/complete-payment`,
              {
                paymentId,
                txid,
              }
            );

            await axios.post(
              `${import.meta.env.REACT_APP_BACKEND_URL}/api/purchases`,
              {
                username: user.username,
                pdfId: pdf.id,
              }
            );

            setPurchased((prev) => [...prev, pdf.id]);
            console.log("✅ Purchase completed and saved.");
          } catch (error) {
            console.error("❌ Completion failed", error);
          }
        },

        onCancel: () => {
          console.log("Payment cancelled by user.");
        },

        onError: (error) => {
          console.error("❌ Pi payment error", error);
        },
      });

      console.log("Pi Payment Result:", payment);
    } catch (err) {
      console.error("❌ Payment failed:", err);
    }

    setLoadingId(null);
  };

  const isPurchased = (pdfId) => purchased.includes(pdfId);

  return (
    <div className="buy-page">
      <h1 className="page-title">🛒 Buy Comics PDFs</h1>
      <div className="pdf-grid">
        {pdfs.map((pdf) => (
          <div key={pdf.id} className="pdf-card">
            <img src={pdf.image} alt={pdf.name} className="pdf-image" />
            <h3>{pdf.name}</h3>
            <p>{pdf.price} TestPi</p>
            {isPurchased(pdf.id) ? (
              <a href={pdf.driveLink} target="_blank" rel="noreferrer">
                <button className="download-btn">📥 Download</button>
              </a>
            ) : (
              <button
                onClick={() => handleBuy(pdf)}
                disabled={loadingId === pdf.id}
                className="buy-btn"
              >
                {loadingId === pdf.id ? "Processing..." : "Buy"}
              </button>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => {window.location.href = 'demo.pi';}}>
        Demo pi App for test{" "}
      </button>
      <button onClick={() => {window.location.href = 'https://demo.pi';}}>demo</button>
    </div>
  );
};

export default BuyPage;
              
