import Backend from "../config/axiosInterceptor.js";

export const sendOtp = async (email,name) => {    
  try {
    const response = await Backend.post("/api/user/register", {email,name});
    return response.data;
    
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};


export const verifyOtp = async (otp, userId) => {
    try {
      const response = await Backend.post("/api/user/verify-otp", { otp, userId});
      return response.data;
    } catch (error) {
      console.error("Error verifying OTP:", error);
      throw error;
    }
  };
