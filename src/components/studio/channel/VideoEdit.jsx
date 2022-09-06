import React from "react";
import { useRecoilState } from "recoil";
import { isEditingState, modalActiveState } from "../../../recoil";

const VideoEdit = ({ selectedVideo }) => {
  const [active, setActive] = useRecoilState(modalActiveState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingState);
  return (
    <div className="flex flex-col modal-box relative max-w-full w-240 h-208 rounded-md p-0">
      <div className="flex border-b h-14">
        <div className="flex justify-center items-center ml-5 text-lg">
          {selectedVideo && selectedVideo.videoName}
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
      <div className=" justify-center items-end h-96">
        <div className="w-full">
          <ul class="progressbar">
            <li className="list-none float-left w-1/3 relative text-center">
              <div className="bg-white w-8 h-8 leading-8 border block mx-auto mt-0 mb-2.5 rounded-full border-blue-500">
                ✓
              </div>
              1
              <div className="absolute w-full h-0.5 bg-blue-500 top-[15px] left-1/2 translate-x-4"></div>
            </li>
            <li className="list-none float-left w-1/3 relative text-center">
              <div className="bg-white w-8 h-8 leading-8 border block mx-auto mt-0 mb-2.5 rounded-full border-blue-500">
                ✓
              </div>
              1
              <div className="absolute w-full h-0.5 bg-blue-500 top-[15px] left-1/2 translate-x-4"></div>
            </li>
            <li className="list-none float-left w-1/3 relative text-center">
              <div className="bg-white w-8 h-8 leading-8 border block mx-auto mt-0 mb-2.5 rounded-full border-blue-500">
                ✓
              </div>
              1
            </li>
          </ul>
        </div>
        edit
      </div>
    </div>
  );
};

export default VideoEdit;
