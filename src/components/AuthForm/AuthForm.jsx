import React from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const AuthForm = ({
  formType,
  handleSubmit,
  handleChange,
  values,
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
        label="Name"
        type="text"
        value={values.name}
        onChange={handleChange("name")}
        placeholder="Enter your Name"
      />
    )}
    <div className="flex items-center">
      <Button type="submit" label={formType} />
    </div>
  </form>
);

export default AuthForm;
