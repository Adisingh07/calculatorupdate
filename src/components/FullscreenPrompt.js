// import React, { useEffect, useState } from "react";

// const FullscreenPrompt = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     // Always show the prompt on load
//     setShowPopup(true);

//     // Remove any fullscreen-asked flag (if exists)
//     localStorage.removeItem("fullscreen-asked");

//     // Listen for fullscreen exit to re-enable popup
//     const handleFullscreenChange = () => {
//       if (!document.fullscreenElement) {
//         setShowPopup(true);
//       }
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   const enterFullscreen = () => {
//     const elem = document.documentElement;
//     if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) {
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) {
//       elem.msRequestFullscreen();
//     }
//   };

//   const handleAccept = () => {
//     enterFullscreen();
//     setShowPopup(false);
//   };

//   const handleCancel = () => {
//     setShowPopup(false);
//   };

//   if (!showPopup) return null;

//   return (
//     <div style={popupStyle}>
//       <h2>Enter Fullscreen Mode?</h2>
//       <div style={{ marginTop: 20 }}>
//         <button onClick={handleAccept} style={buttonStyle}>OK</button>
//         <button onClick={handleCancel} style={buttonStyle}>Cancel</button>
//       </div>
//     </div>
//   );
// };

// const popupStyle = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0, 0, 0, 0.85)",
//   color: "#fff",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 9999,
//   flexDirection: "column",
//   textAlign: "center",
// };

// const buttonStyle = {
//   padding: "10px 20px",
//   margin: "0 10px",
//   fontSize: "16px",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// export default FullscreenPrompt;
