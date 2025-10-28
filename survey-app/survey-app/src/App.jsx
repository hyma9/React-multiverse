import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SurveyTake from "./components/SurveyTake";
import SurveyComplete from "./components/SurveyComplete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<SurveyTake />} />
          <Route path="/complete" element={<SurveyComplete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
