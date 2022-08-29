import React from "react";
import { Routes, Route } from "react-router-dom";
import Channel from "./Channel";
import DirectMessage from "./DirectMessage";

const WorkSpace = () => {
  return (
    <Routes>
      <Route path="/channel" element={<Channel />}></Route>
      <Route path="/dm" element={<DirectMessage />}></Route>
    </Routes>
  );
};

export default WorkSpace;
