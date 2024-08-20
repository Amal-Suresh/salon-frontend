// src/pages/SignupPage.js
import React, { useState } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { sendOtp, verifyOtp } from "../services/authService";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [values, setValues] = useState({ email: "", name: "" });
  const [userId, setUserId] = useState(null);
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendOtp(values.email, values.name);
      navigate("/otp", { state: { userId: response.userId } });
    } catch (error) {
      console.log("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-gray-100">
      <div className="w-full max-w-md">
        <AuthForm
          formType="Sign Up"
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
        />
      </div>
    </div>
  );
};

export default SignupPage;
