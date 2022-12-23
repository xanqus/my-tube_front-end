import React, { useEffect } from "react";
import { ApiController } from "../utils";

const JwtAuthenticatedUser = () => {
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await ApiController({ url: "/user", method: "GET" });
  //     console.log(data);
  //   };
  //   getUsers();
  // }, []);
  return <h2>JwtAuthenticatedUser</h2>;
};

export default JwtAuthenticatedUser;
