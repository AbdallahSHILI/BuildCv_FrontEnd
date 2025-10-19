import React from "react";
import AuthLayout from "./AuthLayout";
import SignupForm from "./signupForm/signupForm";

const Signup = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
