
import React from 'react';

const OtpInput = ({ otp, setOtp }) => (
    <div className="flex space-x-2 mb-4">
        {Array.from({ length: 6 }).map((_, index) => (
            <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index] || ''}
                onChange={(e) => setOtp(e.target.value, index)}
                className="shadow appearance-none border rounded w-10 py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        ))}
    </div>
);

export default OtpInput;
