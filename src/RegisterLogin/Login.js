import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import TodoPaper from "../Todo/TodoPaper";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const authenticator = (e) => {
    e.preventDefault();
    const dataName = JSON.parse(localStorage.getItem("dataUser"));

    const isUser = dataName.filter(
      (user) => user.name === name && user.password === password
    )[0];
    if (isUser) {
      localStorage.setItem("token", isUser.id);
      window.location.replace("/todoPaper");
    }
    // for (let i of dataName) {
    //   if (i.name === name) {
    //     if (i.password === password) {
    //       <TodoPaper user={i} />;
    //       window.location.replace("/todoPaper");
    //     }
    //   }
    // }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="m-auto">
        <form className="w-[38rem] px-8 bg-white rounded-[20px] border-black border-2">
          <Link to="/" className="flex justify-end">
            <GrClose className="my-3" />
          </Link>
          <div className="flex justify-between mb-7 ">
            <h1 className="font-light text-2xl">Username</h1>
            <input
              className="outline-none bg-transparent w-[19.875rem] border-b-2 border-black"
              type="text"
              placeholder="Type your name"
              value={name}
              onChange={nameHandle}
            />
          </div>
          <div className="flex justify-between mb-7 ">
            <h1 className="font-light text-2xl">Password</h1>
            <input
              className="outline-none bg-transparent w-[19.875rem] border-b-2 border-black"
              type="text"
              placeholder="Type your password"
              value={password}
              onChange={passwordHandle}
            />
          </div>

          {/* <Link to="/todoPaper"> */}
          <div className="flex justify-end">
            <button
              onClick={authenticator}
              className="w-[8.875rem] h-9 bg-[#4D9078] rounded-md my-5"
            >
              <h1 className="font-bold text-[24px] text-white">Login</h1>
            </button>
          </div>
          <div className="flex justify-end">
            <hi className="font-light text-[16px] mb-3">
              already have an account?{" "}
              <Link to="/register">
                <u>register here</u>
              </Link>
            </hi>
          </div>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
