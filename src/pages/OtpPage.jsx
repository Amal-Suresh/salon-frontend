// src/pages/OtpPage.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "../components/OtpInput/OtpInput";
import { loginVerifyOtp, verifyOtp } from "../services/authService";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";

const OtpPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = location.state?.userId;
  const type = location.state?.type;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (type === "signup") {
        response =  await verifyOtp(otp.join(""), userId);
      } else if (type === "login") {
        response = await loginVerifyOtp(otp.join(""), userId);
      }
      dispatch(setCredentials({ token: response.token, name: response.name }));
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
          <button type="submit" className="btn btn-primary">
            Verify OTP
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form> 
      </div>
    </div>
  );
};

export default OtpPage;
