import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./UserDetail";

const Users = () => {
  return (
    <Routes>
      <Route path="/:id" element={<UserDetail />}></Route>
    </Routes>
  );
};

export default Users;
