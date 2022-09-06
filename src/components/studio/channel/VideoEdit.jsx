import React from "react";
import { useRecoilState } from "recoil";
import { isEditingState, modalActiveState } from "../../../recoil";

const VideoEdit = () => {
  const [active, setActive] = useRecoilState(modalActiveState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingState);
  return (
    <div className="flex flex-col modal-box relative max-w-full w-240 h-208 rounded-md p-0">
      <div className="flex border-b h-14">
        <div className="flex justify-center items-center ml-5 text-lg">
          동영상 제목
        </div>
        <div className="ml-auto w-14">
          <label
            htmlFor="my-modal-4"
            className="flex justify-center items-center h-full cursor-pointer text-gray-700 font-bold"
            onClick={() => {
              setActive(false);
              setIsEditing(false);
            }}
          >
            ✕
          </label>
        </div>
      </div>
      <div className="flex justify-center items-end h-96">edit</div>
    </div>
  );
};

export default VideoEdit;
