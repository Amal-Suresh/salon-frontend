// src/pages/LoginPage.js
import React, { useState } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { sendOtp, verifyOtp } from "../services/authService";

const LoginPage = () => {
  const [values, setValues] = useState({ email: "" });
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (showOtp) {
      await verifyOtp(otp);
    } else {
      await sendOtp(values.email);
      setShowOtp(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <AuthForm
          formType="Login"
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          showOtp={showOtp}
          otp={otp}
          setOtp={setOtp}
        />
      </div>
    </div>
  );
};

export default LoginPage;
