import React from "react";
import { Routes, Route } from "react-router-dom";
import DirectMessage from "./DirectMessage";

const WorkSpace = () => {
  return (
    <Routes>
      <Route path="/dm" element={<DirectMessage />} />
    </Routes>
  );
};

export default WorkSpace;
