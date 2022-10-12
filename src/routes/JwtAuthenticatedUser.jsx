import React, { useEffect } from "react";
import ApiController from "../utils/ApiController";

const JwtAuthenticatedUser = () => {
  useEffect(() => {
    const getUsers = async () => {
      const data = await ApiController({ url: "/api/v1/user", method: "GET" });
      console.log(data);
    };
    getUsers();
  }, []);
  return <h2>JwtAuthenticatedUser</h2>;
};

export default JwtAuthenticatedUser;
