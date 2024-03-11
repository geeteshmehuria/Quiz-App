import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Quiz from "../Pages/Quiz";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default AllRoutes;
