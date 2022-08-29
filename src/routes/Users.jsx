import React, { useEffect } from "react";
import ApiController from "../utils/ApiController";

const Users = () => {
  useEffect(() => {
    const getUsers = async () => {
      const data = await ApiController({ url: "/api/v1/user", method: "GET" });
    };
    getUsers();
  }, []);
  return <h2>Users</h2>;
};

export default Users;
