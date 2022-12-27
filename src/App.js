import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./RegisterLogin/WelcomePage";
import Login from "./RegisterLogin/Login";
import Register from "./RegisterLogin/Register";
import TodoPaper from "./Todo/TodoPaper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="todoPaper" element={<TodoPaper />} />
      </Routes>
    </>
  );
}

export default App;
