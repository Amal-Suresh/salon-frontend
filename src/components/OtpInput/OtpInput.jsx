// src/components/OtpInput/OtpInput.js
import React, { useRef, useEffect } from "react";

const OtpInput = ({ otp, setOtp }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    const firstEmptyIndex = otp.findIndex((char) => !char);
    if (firstEmptyIndex !== -1) {
      inputRefs.current[firstEmptyIndex].focus();
    }
  }, [otp]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; 
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move focus to the next input
    if (value) {
      const nextIndex = index + 1;
      if (nextIndex < otp.length) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index]) {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        inputRefs.current[prevIndex].focus();
      }
    }
  };

  return (
    <div className="flex space-x-2 mb-4">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          maxLength="1"
          className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          autoFocus={index === 0} 
        />
      ))}
    </div>
  );
};

export default OtpInput;
