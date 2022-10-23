import React from "react";

const Register = () => {
  const handleRegister = () => {
    console.log("I am registering.");
  };
  return (
    <div>
      <h2>This is Register page.</h2>
      <button onClick={handleRegister} className="ms-4">
        Register here
      </button>
    </div>
  );
};

export default Register;
