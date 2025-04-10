import "./PrivacyPolicy.css"; // ✅ Shared CSS for styling consistency
import React from "react";

const TermsOfService = () => {
  return (
    <div className="privacy-container">
      <h1>Terms of Service</h1>
      <p><strong>Effective Date:</strong> April 10, 2025</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the Advanced Calculator App ("App"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.
      </p>

      <h2>2. Eligibility & Usage</h2>
      <ul>
        <li>You must be at least <strong>13 years old</strong> to use this app.</li>
        <li>You agree not to misuse the app, including but not limited to hacking, disrupting services, or attempting unauthorized access.</li>
        <li>The app is intended for educational and productivity purposes only.</li>
      </ul>

      <h2>3. Purchases & Pi Transactions</h2>
      <ul>
        <li>PDF files and calculator templates can be purchased using the <strong>Pi Network</strong>.</li>
        <li>All purchases are <strong>final and non-refundable</strong> unless the product fails to deliver.</li>
        <li>We do not handle your Pi balance or wallet data. Transactions are processed securely via the official <strong>Pi SDK</strong>.</li>
        <li>For payment issues, please consult the <strong>Pi Network support</strong> team.</li>
      </ul>

      <h2>4. Content Ownership & Usage</h2>
      <ul>
        <li>All content including templates, UI, and PDFs are the property of the Advanced Calculator App.</li>
        <li>You may not resell, redistribute, copy, or modify any app content without written permission.</li>
      </ul>

      <h2>5. Future Features</h2>
      <p>
        Future features may include advanced themes, synced history, and downloadable packs. These may be subject to new terms or require additional permissions.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        The app is provided <strong>"as is"</strong> without warranties of any kind. We are not liable for losses or damages caused by:
      </p>
      <ul>
        <li>Service downtime</li>
        <li>Errors in calculations or data loss</li>
        <li>Pi transaction failures or blockchain delays</li>
      </ul>

      <h2>7. Updates to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Updates will be posted here, and continued use of the app implies acceptance of any changes.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        For any questions, contact us at: <strong>aadi321098@gmail.com</strong>
      </p>
    </div>
  );
};

export default TermsOfService;
