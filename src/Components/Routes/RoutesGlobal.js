import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Views/Home'
import ListCharacters from "../Views/List-Characters";

const RoutesGlobal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListCharacters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesGlobal;
