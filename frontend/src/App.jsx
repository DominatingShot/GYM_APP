// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route renders Landing page */}
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/dashboard" element={<DashBoard/>}></Route>  */}
        
      </Routes>
    </BrowserRouter>
  );
}
