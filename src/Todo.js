import React from "react";
import { GrClose } from "react-icons/gr";

function Todo({ todo, fetch }) {
  const handleCheckedBox = () => {
    const items = JSON.parse(localStorage.getItem("harta"));
    for (let i of items) {
      if (i.id === todo.id) {
        if (i.complete === false) {
          i.complete = true;
        } else if (i.complete === true) {
          i.complete = false;
        }
      }
    }
    localStorage.setItem("harta", JSON.stringify(items));
    fetch(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem("harta"));
    const filtered = items.filter((a) => a.id !== todo.id);
    localStorage.setItem("harta", JSON.stringify(filtered));
    fetch(true);
  };

  return (
    <div
      className={`flex justify-between w-[26.375rem] h-[3.125rem] mb-[1.625rem] border-[0.125rem] border-black rounded-[0.5rem] ${
        todo.complete ? "bg-green-300/30" : ""
      }`}
    >
      <h1
        className={`ml-5 flex items-center font-light text-2xl ${
          todo.complete === true ? "line-through" : ""
        }`}
      >
        {todo.name}
      </h1>
      <div className="flex items-center gap-2.5 mr-3">
        <input
          checked={todo.complete}
          className="flex w-[1.875rem] h-[1.875rem] "
          type="checkbox"
          onChange={handleCheckedBox}
        />
        <button
          className="flex w-[1.875rem] h-[1.875rem] border-[0.125rem] border-black "
          onClick={handleDelete}
        >
          <GrClose className="m-auto " />
        </button>
      </div>
    </div>
  );
}

export default Todo;
