import React from "react";
import InputField from "../InputField/InputField";
import OtpInput from "../OtpInput/OtpInput";
import Button from "../Button/Button";

const AuthForm = ({
  formType,
  handleSubmit,
  handleChange,
  values,
  showOtp,
  otp,
  setOtp,
}) => (
  <form
    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    onSubmit={handleSubmit}
  >
    <h2 className="text-2xl font-bold mb-6">{formType}</h2>
    <InputField
      label="Email"
      type="email"
      value={values.email}
      onChange={handleChange("email")}
      placeholder="Enter your email"
    />
    {formType === "Sign Up" && (
      <InputField
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange("password")}
        placeholder="Enter your password"
      />
    )}
    {showOtp && <OtpInput otp={otp} setOtp={setOtp} />}
    <div className="flex items-center">
      <Button type="submit" label={formType} />
    </div>
  </form>
);

export default AuthForm;
