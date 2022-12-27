import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function TodoPaper({ user }) {
  console.log(user);
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [isFetch, setIsFetch] = useState(true);
  const storedItems = "harta";
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    gender: "",
    password: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const userJSON = localStorage.getItem("dataUser");

    const data = JSON.parse(userJSON);
    const user = data.filter((item) => item.id === token)[0];
    setUserData(user);
  }, []);

  useEffect(() => {
    if (isFetch) {
      const stored = JSON.parse(localStorage.getItem(storedItems));
      if (stored) setTodo(stored);
    }
    return () => setIsFetch(false);
  }, [isFetch]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (input !== "") {
      localStorage.setItem(
        storedItems,
        JSON.stringify([
          ...todo,
          {
            id: uuidv4(),
            name: input[0].toUpperCase() + input.slice(1),
            complete: false,
          },
        ])
      );
      setInput("");
      setIsFetch(true);
    }
  };

  const handleClearChecked = () => {
    const item = JSON.parse(localStorage.getItem("harta"));
    const filtered = item.filter((a) => a.complete !== true);
    localStorage.setItem("harta", JSON.stringify(filtered));
    setIsFetch(true);
  };

  const cek = () => {
    console.log();
  };
  return (
    <>
      <div
        className={`flex w-screen h-screen ${
          userData.gender === "male" ? "bg-slate-300" : " bg-red-300"
        }`}
      >
        <div className="m-auto">
          <div className="flex justify-between mb-3">
            <h1 className=" font-outfit font-extrabold text-[32px]">
              {userData.name}-To do list
            </h1>
            <div className="flex items-end">
              <Link to="/" className="font-outfit font-extrabold text-[24px]">
                Logout
              </Link>
            </div>
          </div>
          <div className=" w-[29.125rem] h-[30rem] pt-10 px-5 bg-white border-[0.125rem] border-black rounded-2xl ">
            <form
              onSubmit={handleAddTodo}
              className="flex justify-between items-end mb-[1.563rem]"
            >
              <input
                className="w-[19.75rem] h-[3.125rem] outline-none border-[0.125rem] border-black rounded-[0.625rem] font-light text-2xl pl-5"
                placeholder="enter your todo brotah"
                type="text"
                onChange={changeHandler}
                value={input}
              />
              <button className="w-[6.313rem] h-[3.125rem] bg-[#F75B2B] border-[0.125rem] border-black rounded-[0.5rem]">
                <h1 className="font-Outfit text-2xl font-extrabold">add</h1>
              </button>
            </form>
            {/* <button className="font-extrabold text-red-500">clear</button> */}
            <div className=" max-h-[19.625rem] overflow-y-scroll scrollbar-hide">
              <TodoList list={todo} fetch={setIsFetch} />
            </div>
            <div className="flex justify-end mt-2 underline underline-offset-1">
              <button className="" onClick={handleClearChecked}>
                <h1>clear checked</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoPaper;
