import React from "react";
import { CgProfile } from "react-icons/cg";

const Comment = ({ comment }) => {
  return (
    <li>
      <CgProfile />
      <div>{comment.text}</div>
    </li>
  );
};

export default Comment;
