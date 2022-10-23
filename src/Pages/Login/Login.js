import React from "react";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const handleLogin = () => {
    console.log("I am clicked");
  };
  return (
    <div>
      <h2>This is login page</h2>
      <button onClick={handleLogin} className="ms-4">
        <span className="google-icon">
          {" "}
          <FcGoogle />{" "}
        </span>
        <span>Login here</span>
      </button>
    </div>
  );
};

export default Login;
