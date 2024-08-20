// src/pages/OtpPage.js
import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from "../components/OtpInput/OtpInput";
import { verifyOtp } from "../services/authService";

const OtpPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const userId = location.state?.userId;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyOtp(otp.join(""), userId);
      navigate("/"); 
    } catch (error) {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <OtpInput otp={otp} setOtp={setOtp} />
          <button type="submit" className="btn btn-primary">Verify OTP</button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
