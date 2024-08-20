import React, { useState } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginOtp } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [values, setValues] = useState({ email: "" });
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginOtp(values.email);
      navigate("/otp", { state: { userId: response.userId,type: 'login' } });
    } catch (error) {
      console.log("Failed to send OTP. Please try again.");
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
        />
      </div>
    </div>
  );
};

export default LoginPage;
