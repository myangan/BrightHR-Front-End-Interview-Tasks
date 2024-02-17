import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FirstTask from "./components/FirstTask";
import SecondTask from "./components/SecondTask";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firstTask" element={<FirstTask />} />
        <Route path="/secondTask" element={<SecondTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
