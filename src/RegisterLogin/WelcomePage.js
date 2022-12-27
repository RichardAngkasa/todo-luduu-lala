import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="m-auto">
          <div className="font-outfit font-extrabold text-[18px]">
            Todo List with{" "}
            <Link to="register">
              <u>Register</u>
            </Link>
            /
            <Link to="login">
              <u>Login</u>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
