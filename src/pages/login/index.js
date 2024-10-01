import Login from "@/components/organism/Login";
import AuthLayout from "@/components/templates/AuthLayout";
import React, { useState } from "react";

const LoginPage = () => {
  const [isDarkMode, setIsDarkMmode] = useState(false);
  function handleChange() {
    setIsDarkMmode(!isDarkMode);
  }
  return (
    <>
      <div
        className={`flex justify-center items-center min-h-screen ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <AuthLayout
          title={"Login"}
          desc={"Hi Please login to your account"}
          type="login"
        >
          <Login />
        </AuthLayout>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-black text-white p-4 " onClick={handleChange}>
          Dark Mode
        </button>
      </div>
    </>
  );
};

export default LoginPage;
