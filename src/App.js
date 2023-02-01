import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IncomeSummary from "./pages/IncomeSummary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incomesummary" element={<IncomeSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
