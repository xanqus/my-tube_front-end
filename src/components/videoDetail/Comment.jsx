import React from "react";
import { BiLike } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Comment = ({ comment }) => {
  return (
    <li className="flex gap-4">
      <div className="mt-1">
        <CgProfile className="text-3xl" />
      </div>
      <div>
        <div className="font-bold">{comment.userName}</div>
        <div>{comment.text}</div>
        <div className="flex gap-2">
          <BiLike className="mt-1" />
          <div>{comment.likes}</div>
        </div>
      </div>
    </li>
  );
};

export default Comment;
