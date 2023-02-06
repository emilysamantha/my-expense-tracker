import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incomesummary" element={<Summary incExp="inc" />} />
        <Route path="/expensesummary" element={<Summary incExp="exp" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
