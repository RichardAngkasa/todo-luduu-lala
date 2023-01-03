import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function Register() {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  //   const [rePassword, setRepassword] = useState("");
  const [data, setData] = useState([]);
  const [fetch, setFetch] = useState(true);
  const userData = "dataUser";

  //harus ditanya, ini cara kerjanya gmn di balik layar
  const userHandle = (e) => {
    setUsername(e.target.value);
  };
  const genderHandle = (e) => {
    setGender(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  //   const rePasswordHandle = (e) => {
  //     setRepassword(e.target.value);
  //   };

  useEffect(() => {
    if (fetch) {
      const stored = JSON.parse(localStorage.getItem(userData));
      if (stored) setData(stored);
    }
    return () => setFetch(false);
  }, [fetch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username !== "" &&
      gender !== "" &&
      password !== ""
      //   rePassword !== "" &&
      //   password === rePassword
    ) {
      localStorage.setItem(
        userData,
        JSON.stringify([
          ...data,
          {
            id: Crypto.randomUUID(),
            name: username,
            gender: gender,
            password: password,
          },
        ])
      );

      window.location.replace("/login");
    }
  };
  //   const check = () => {
  //     setData("");
  //     console.log(data);
  //   };
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
              value={username}
              onChange={userHandle}
            ></input>
          </div>
          <div className="flex justify-between mb-7 ">
            <h1 className="font-light text-2xl">Gender</h1>
            <input
              className="outline-none bg-transparent w-[19.875rem] border-b-2 border-black"
              type="text"
              placeholder="Type your gender"
              value={gender}
              onChange={genderHandle}
            ></input>
          </div>
          <div className="flex justify-between ">
            <h1 className="font-light text-2xl">Password</h1>
            <input
              className="outline-none bg-transparent w-[19.875rem] border-b-2 border-black"
              type="text"
              placeholder="Type your password"
              value={password}
              onChange={passwordHandle}
            ></input>
          </div>
          {/* <input
            type="text"
            placeholder="Re-Type your password"
            value={rePassword}
            onChange={rePasswordHandle}
          ></input> */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="w-[8.875rem] h-9 bg-[#4D9078] rounded-md my-5"
            >
              <h1 className="font-bold text-[24px] text-white">Register</h1>
            </button>
          </div>
          <div className="flex justify-end">
            <hi className="font-light text-[16px] mb-3">
              already have an account?{" "}
              <Link to="/login">
                <u>login here</u>
              </Link>
            </hi>
          </div>
        </form>

        {/* <button onClick={check}>check</button> */}
      </div>
    </div>
  );
}

export default Register;
