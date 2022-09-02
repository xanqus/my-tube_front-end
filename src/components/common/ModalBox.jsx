import React, { useState } from "react";

const ModalBox = ({ active, setActive }) => {
  //
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        checked={active}
        onChange={() => {}}
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="flex flex-col modal-box relative max-w-full w-240 h-208 rounded-md p-0">
          <div className="flex border-b h-14">
            <div className="flex justify-center items-center ml-5 text-lg">
              동영상 업로드
            </div>
            <div className="ml-auto w-14">
              <label
                htmlFor="my-modal-4"
                className="flex justify-center items-center h-full cursor-pointer text-gray-700 font-bold"
                onClick={() => {
                  setActive(false);
                }}
              >
                ✕
              </label>
            </div>
          </div>
          <div className="flex h-96 bg-red-500"></div>
          <div className="h-auto flex-grow bg-green-500">
            <div></div>
            <div>
              <input type="file" w-24 />
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default ModalBox;
