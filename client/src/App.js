import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="my-expense-tracker/" element={<Home />} />
        <Route
          path="my-expense-tracker/incomesummary"
          element={<Summary incExp="inc" />}
        />
        <Route
          path="my-expense-tracker/expensesummary"
          element={<Summary incExp="exp" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
