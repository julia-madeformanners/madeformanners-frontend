import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./EmailVrifiMsg.scss";
import { useBetween } from "use-between";
import { useSelector } from "react-redux";

const EmailVrifiMsg = () => {
  const location = useLocation();
  const [status, setStatus] = useState("Verifying your email...");
  const state = useSelector((state) => state.data);
    const { serverUrl } = useBetween(state.useShareState);

  useEffect(() => {
    // استخراج التوكن من الـ query string
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (!token) {
      setStatus("Invalid or missing token.");
      return;
    }

    // استدعاء backend للتحقق
    axios
      .get(`${serverUrl}/api/contactUs/verifyContactEmail?token=${token}`)
      .then((res) => {
        setStatus("success");
        
      })
      .catch((err) => {
        console.error(err);
        console.log("VERIFY ERROR:", err.response?.data || err.message);
        setStatus("Failed to verify your email. The token might be invalid or expired.");
      });
  }, [location.search]);

  return (
    <div className="confirm-email-page">
      <div className="confirm-email-card">
        
          <>
            <h1>Thank You!</h1>
            <p>
              Thank you for sending your message through our website. 
              Your message has been successfully sent to the admin and 
              you will receive a reply shortly.
            </p>
          </>
        
      </div>
    </div>
  );
};

export default EmailVrifiMsg;
