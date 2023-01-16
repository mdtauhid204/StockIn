import Home from "./components/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// eslint-disable-next-line

import React, { useEffect } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

import { loadUser } from "./store/actions/authactions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="App">
      {/* <Router> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
