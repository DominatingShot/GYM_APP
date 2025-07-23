// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route renders Landing page */}
        <Route path="/" element={<Landing />} />
        {/* Add more routes here as your app grows */}
      </Routes>
    </BrowserRouter>
  );
}
