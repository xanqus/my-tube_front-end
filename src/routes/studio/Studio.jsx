import React from "react";
import { Route, Routes } from "react-router-dom";
import Channel from "./Channel";

const Studio = () => {
  return (
    <Routes>
      <Route path="/channel/:id" element={<Channel />} />
    </Routes>
  );
};

export default Studio;
