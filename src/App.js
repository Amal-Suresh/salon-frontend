import React, { useEffect } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "./slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const token = userInfo?.token;

  const privateRoute = (goto) =>
    userInfo && userInfo?.isAuthenticated && checkTokenExpiry() ? (
      goto
    ) : (
      <Navigate to="/login" />
    );

  const checkTokenExpiry = () => {
    try {
      if (token) {
        const decodedJwt = JSON.parse(atob(token.split(".")[1]));
        if (decodedJwt.exp * 1000 < Date.now()) {
          dispatch(clearCredentials());
          window.location.href = "/";
          return false;
        } else {
          return true;
        }
      }
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  };
  useEffect(() => {
    checkTokenExpiry();
  }, [token]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
